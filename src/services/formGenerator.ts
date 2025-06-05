// This is a mock implementation of an AI form generator
// In a real implementation, this would connect to an AI service

interface FormField {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

interface GeneratedForm {
  title: string;
  description?: string;
  fields: FormField[];
  submitButtonText: string;
}

// Helper to generate a random ID
const generateId = () => {
  return Math.random().toString(36).substring(2, 9);
};

export const generateFormFromDescription = (description: string): GeneratedForm => {
  // This is where the AI would analyze the description and generate a form
  // For this demo, we'll use some simple pattern matching to create different forms

  let title = "Generated Form";
  let formDescription = "";
  let fields: FormField[] = [];
  
  // Simple pattern matching for demo purposes
  const lowercaseDesc = description.toLowerCase();
  
  // Determine form type based on keywords
  if (lowercaseDesc.includes('contact') || lowercaseDesc.includes('restaurant')) {
    title = "Contact Form";
    formDescription = "We'd love to hear from you. Fill out the form below to get in touch.";
    
    fields = [
      {
        id: generateId(),
        type: 'text',
        label: 'Name',
        placeholder: 'Your full name',
        required: true
      },
      {
        id: generateId(),
        type: 'email',
        label: 'Email',
        placeholder: 'your.email@example.com',
        required: true
      },
      {
        id: generateId(),
        type: 'tel',
        label: 'Phone Number',
        placeholder: '(123) 456-7890',
        required: false
      },
      {
        id: generateId(),
        type: 'textarea',
        label: 'Message',
        placeholder: 'How can we help you?',
        required: true
      }
    ];
  } 
  else if (lowercaseDesc.includes('job') || lowercaseDesc.includes('application')) {
    title = "Job Application Form";
    formDescription = "Apply for a position with our company.";
    
    fields = [
      {
        id: generateId(),
        type: 'text',
        label: 'Full Name',
        placeholder: 'Your full name',
        required: true
      },
      {
        id: generateId(),
        type: 'email',
        label: 'Email Address',
        placeholder: 'your.email@example.com',
        required: true
      },
      {
        id: generateId(),
        type: 'tel',
        label: 'Phone Number',
        placeholder: '(123) 456-7890',
        required: true
      },
      {
        id: generateId(),
        type: 'select',
        label: 'Position',
        required: true,
        options: ['Software Developer', 'UX Designer', 'Product Manager', 'Marketing Specialist', 'Other']
      },
      {
        id: generateId(),
        type: 'textarea',
        label: 'Work Experience',
        placeholder: 'Please describe your relevant work experience',
        required: true
      },
      {
        id: generateId(),
        type: 'textarea',
        label: 'Education',
        placeholder: 'Share your educational background',
        required: true
      }
    ];
  }
  else if (lowercaseDesc.includes('newsletter') || lowercaseDesc.includes('signup')) {
    title = "Newsletter Signup";
    formDescription = "Stay updated with our latest news and promotions.";
    
    fields = [
      {
        id: generateId(),
        type: 'text',
        label: 'Name',
        placeholder: 'Your name',
        required: false
      },
      {
        id: generateId(),
        type: 'email',
        label: 'Email Address',
        placeholder: 'your.email@example.com',
        required: true
      },
      {
        id: generateId(),
        type: 'radio',
        label: 'Subscription Frequency',
        required: true,
        options: ['Daily', 'Weekly', 'Monthly']
      },
      {
        id: generateId(),
        type: 'checkbox',
        label: 'I agree to receive marketing emails',
        required: true
      }
    ];
  }
  else if (lowercaseDesc.includes('feedback') || lowercaseDesc.includes('survey')) {
    title = "Feedback Form";
    formDescription = "We value your feedback. Please take a moment to let us know how we're doing.";
    
    fields = [
      {
        id: generateId(),
        type: 'text',
        label: 'Name',
        placeholder: 'Your name',
        required: false
      },
      {
        id: generateId(),
        type: 'email',
        label: 'Email',
        placeholder: 'your.email@example.com',
        required: false
      },
      {
        id: generateId(),
        type: 'select',
        label: 'Rating',
        required: true,
        options: ['Excellent', 'Good', 'Average', 'Poor', 'Very Poor']
      },
      {
        id: generateId(),
        type: 'textarea',
        label: 'Comments',
        placeholder: 'Please share your thoughts',
        required: true
      },
      {
        id: generateId(),
        type: 'checkbox',
        label: 'May we contact you about your feedback?',
        required: false
      }
    ];
  }
  else {
    // Default generic form
    fields = [
      {
        id: generateId(),
        type: 'text',
        label: 'Name',
        placeholder: 'Your name',
        required: true
      },
      {
        id: generateId(),
        type: 'email',
        label: 'Email',
        placeholder: 'your.email@example.com',
        required: true
      },
      {
        id: generateId(),
        type: 'textarea',
        label: 'Message',
        placeholder: 'Your message here',
        required: true
      }
    ];
  }

  return {
    title,
    description: formDescription,
    fields,
    submitButtonText: 'Submit'
  };
};