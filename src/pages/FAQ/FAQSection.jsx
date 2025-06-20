import React from "react";

const FAQSection = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">
        Frequently Asked Question (FAQ)
      </h2>
      <p className="text-center text-base-content mb-10">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
      </p>

      <div className="space-y-4">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium text-primary">
            How does this posture corrector work?
          </div>
          <div className="collapse-content text-base-content">
            <p>
              A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium text-primary">
            Is it suitable for all ages and body types?
          </div>
          <div className="collapse-content text-base-content">
            <p>Yes, it is designed to be adjustable and suitable for various body types and ages.</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium text-primary">
            Does it really help with back pain and posture improvement?
          </div>
          <div className="collapse-content text-base-content">
            <p>Yes, with consistent use, it can significantly reduce back pain and improve posture over time.</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium text-primary">
            Does it have smart features like vibration alerts?
          </div>
          <div className="collapse-content text-base-content">
            <p>No, this model does not include smart features like vibration alerts.</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium text-primary">
            How will I be notified when the product is back in stock?
          </div>
          <div className="collapse-content text-base-content">
            <p>You can sign up for stock notifications on our website to receive an email alert.</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="btn btn-primary">See More FAQs</button>
      </div>
    </div>
  );
};

export default FAQSection;