import React from 'react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardFooter } from '../ui/Card';
import { Check } from 'lucide-react';

interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  buttonText,
}) => {
  return (
    <Card className={`
      ${isPopular ? 'border-2 border-blue-500 shadow-lg' : 'border border-gray-200'} 
      transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
    `}>
      {isPopular && (
        <div className="bg-blue-500 text-white text-center py-1 text-sm font-medium">
          Most Popular
        </div>
      )}
      <CardHeader className={`${isPopular ? 'bg-blue-50' : ''}`}>
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-gray-500 ml-1">/month</span>}
        </div>
        <p className="mt-2 text-gray-600">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 text-green-500 mr-2">
                <Check size={18} />
              </span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="text-center">
        <Button
          variant={isPopular ? 'primary' : 'outline'}
          size="lg"
          fullWidth
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

const Pricing: React.FC = () => {
  const pricingTiers = [
    {
      title: 'Free',
      price: '$0',
      description: 'Perfect for trying out FormGenius',
      features: [
        'Create up to 3 forms',
        'Basic form fields',
        'HTML export',
        'Form submissions via email',
      ],
      buttonText: 'Sign Up Free',
    },
    {
      title: 'Pro',
      price: '$19',
      description: 'Everything you need for professional forms',
      features: [
        'Unlimited forms',
        'Advanced form fields',
        'Custom branding',
        'Form analytics',
        'API access',
        'Priority support',
      ],
      isPopular: true,
      buttonText: 'Start Pro Trial',
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      description: 'For teams and organizations',
      features: [
        'Unlimited everything',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantees',
        'Advanced security features',
        'Team collaboration tools',
      ],
      buttonText: 'Contact Sales',
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for you and start creating AI-powered forms today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              title={tier.title}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              isPopular={tier.isPopular}
              buttonText={tier.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;