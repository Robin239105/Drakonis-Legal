import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Button from '../ui/Button';

export default function FormSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-16 px-8"
    >
      <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
      <h3 className="font-heading text-2xl text-warm-white mb-4">
        Enquiry Submitted Successfully
      </h3>
      <p className="text-gray-light font-body max-w-md mx-auto mb-4">
        Thank you for contacting Drakonis Legal. Your enquiry has been received and will be reviewed
        by our conflicts team within 24 hours.
      </p>
      <p className="text-sm text-gray-muted font-body max-w-md mx-auto mb-8">
        A member of our team will contact you using your preferred method to arrange an initial consultation.
        Please check your inbox for a confirmation email.
      </p>
      <Button to="/" variant="outline">
        Return to Home
      </Button>
    </motion.div>
  );
}
