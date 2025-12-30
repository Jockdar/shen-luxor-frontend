import React from 'react';

const Policy = ({ title, content }) => {
  return (
    <div className="border-t pt-12 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center py-10">
          <h1 className="font-serif uppercase tracking-widest text-3xl sm:text-4xl text-gray-900 mb-4">
            {title || 'POLICY'}
          </h1>
          <div className="w-24 h-[1px] bg-[#C5A059] mx-auto"></div>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none text-gray-600 font-sans leading-relaxed">
          {content || (
            <div className="space-y-6">
              <section className="border-b border-gray-200 pb-8">
                <h2 className="font-serif uppercase tracking-widest text-xl text-gray-900 mb-4">
                  INTRODUCTION
                </h2>
                <p className="text-sm leading-relaxed">
                  At Shen Luxor, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This policy outlines how we collect, use, and safeguard your data.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-8 pt-8">
                <h2 className="font-serif uppercase tracking-widest text-xl text-gray-900 mb-4">
                  INFORMATION COLLECTION
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Name and contact information</li>
                  <li>Payment and billing details</li>
                  <li>Shipping address</li>
                  <li>Order history and preferences</li>
                </ul>
              </section>

              <section className="border-b border-gray-200 pb-8 pt-8">
                <h2 className="font-serif uppercase tracking-widest text-xl text-gray-900 mb-4">
                  HOW WE USE YOUR INFORMATION
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your orders and our products</li>
                  <li>Improve our services and customer experience</li>
                  <li>Send you marketing communications (with your consent)</li>
                </ul>
              </section>

              <section className="pt-8">
                <h2 className="font-serif uppercase tracking-widest text-xl text-gray-900 mb-4">
                  CONTACT US
                </h2>
                <p className="text-sm leading-relaxed">
                  If you have any questions about this policy, please contact us at{' '}
                  <a href="mailto:contact@shenluxor.com" className="text-[#C5A059] hover:underline">
                    contact@shenluxor.com
                  </a>
                </p>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Policy;

