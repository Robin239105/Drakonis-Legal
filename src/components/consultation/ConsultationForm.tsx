import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLocation } from 'react-router-dom';
import { practiceAreas } from '../../data/practiceAreas';

const schema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  company: z.string().optional(),
  email: z.string().email('Valid email address is required'),
  phone: z.string().min(8, 'Phone number is required'),
  office: z.string().optional(),
  practiceArea: z.string().min(1, 'Please select a practice area'),
  matterDescription: z.string().min(50, 'Please describe your matter in at least 50 characters'),
  contactMethod: z.enum(['email', 'phone', 'video']),
  timezone: z.string().optional(),
  referral: z.string().optional(),
  confidentiality: z.boolean().refine(val => val === true, {
    message: 'You must acknowledge the confidentiality notice'
  }),
});

type FormData = z.infer<typeof schema>;

interface ConsultationFormProps {
  onSuccess: () => void;
}

export default function ConsultationForm({ onSuccess }: ConsultationFormProps) {
  const location = useLocation();
  const prefill = (location.state ?? {}) as Partial<FormData>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      contactMethod: 'email',
      fullName: prefill.fullName ?? '',
      email: prefill.email ?? '',
      practiceArea: prefill.practiceArea ?? '',
    },
  });

  const onSubmit = async (_data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    onSuccess();
  };

  const inputStyles = 'w-full h-[46px] bg-navy border border-gold/20 rounded px-4 py-3 text-warm-white font-body text-sm leading-5 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 transition-colors placeholder:text-gray-muted';
  const labelStyles = 'block text-sm font-ui text-gray-light mb-2 tracking-wide';
  const errorStyles = 'text-xs text-red-400 mt-1 font-ui';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelStyles}>Full Name *</label>
          <input {...register('fullName')} className={inputStyles} placeholder="Your full name" />
          {errors.fullName && <p className={errorStyles}>{errors.fullName.message}</p>}
        </div>
        <div>
          <label className={labelStyles}>Company / Organisation</label>
          <input {...register('company')} className={inputStyles} placeholder="Company name" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelStyles}>Email Address *</label>
          <input {...register('email')} type="email" className={inputStyles} placeholder="your@email.com" />
          {errors.email && <p className={errorStyles}>{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelStyles}>Phone Number *</label>
          <input {...register('phone')} type="tel" className={inputStyles} placeholder="+44 20 0000 0000" />
          {errors.phone && <p className={errorStyles}>{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelStyles}>Office Preference</label>
          <select {...register('office')} className={inputStyles}>
            <option value="">Select office</option>
            <option value="london">London</option>
            <option value="newyork">New York</option>
            <option value="dubai">Dubai</option>
            <option value="singapore">Singapore</option>
            <option value="hongkong">Hong Kong</option>
          </select>
        </div>
        <div>
          <label className={labelStyles}>Practice Area *</label>
          <select {...register('practiceArea')} className={inputStyles}>
            <option value="">Select practice area</option>
            {practiceAreas.map((area) => (
              <option key={area.slug} value={area.slug}>{area.title}</option>
            ))}
          </select>
          {errors.practiceArea && <p className={errorStyles}>{errors.practiceArea.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelStyles}>Nature of Matter *</label>
        <textarea
          {...register('matterDescription')}
          className={`${inputStyles} !h-auto min-h-[120px] resize-y`}
          placeholder="Please describe the nature of your legal matter. All information is treated as strictly confidential."
        />
        {errors.matterDescription && <p className={errorStyles}>{errors.matterDescription.message}</p>}
      </div>

      <div>
        <label className={labelStyles}>Preferred Contact Method</label>
        <div className="flex items-center space-x-6">
          {[
            { value: 'email', label: 'Email' },
            { value: 'phone', label: 'Phone' },
            { value: 'video', label: 'Video Call' },
          ].map((option) => (
            <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                {...register('contactMethod')}
                value={option.value}
                className="text-gold focus:ring-gold accent-[#B8973A]"
              />
              <span className="text-sm font-ui text-gray-light">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelStyles}>Preferred Time Zone</label>
          <select {...register('timezone')} className={inputStyles}>
            <option value="">Select timezone</option>
            <option value="gmt">GMT / BST (London)</option>
            <option value="est">EST / EDT (New York)</option>
            <option value="gst">GST (Dubai)</option>
            <option value="sgt">SGT (Singapore)</option>
            <option value="hkt">HKT (Hong Kong)</option>
          </select>
        </div>
        <div>
          <label className={labelStyles}>How did you hear about us?</label>
          <select {...register('referral')} className={inputStyles}>
            <option value="">Select option</option>
            <option value="referral">Professional Referral</option>
            <option value="chambers">Chambers & Partners</option>
            <option value="legal500">Legal 500</option>
            <option value="press">Press / Media</option>
            <option value="search">Online Search</option>
            <option value="event">Conference / Event</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="pt-2">
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('confidentiality')}
            className="mt-1 accent-[#B8973A]"
          />
          <span className="text-xs text-gray-muted font-body leading-relaxed">
            I understand that submitting this form does not create an attorney-client relationship.
            Information provided will be treated as confidential in accordance with our{' '}
            <a href="/privacy-policy" className="text-gold hover:text-gold-light underline">Privacy Policy</a>.
          </span>
        </label>
        {errors.confidentiality && <p className={errorStyles}>{errors.confidentiality.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gold text-obsidian font-ui font-semibold tracking-tight py-4 rounded hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting Enquiry...' : 'Submit Enquiry'}
      </button>
    </form>
  );
}
