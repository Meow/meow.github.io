import React from "react";

function ContactPage(_props) {
  return <div className="description">
    <div className="block">
      <div className="block__header">
        <i className="fa fa-envelope"></i> Contact me
      </div>
      <div className="block__content">
        <p>I am typically contactable on all of my social media. If you wish to contact me for a specific purpose, please read further.</p>
      </div>
    </div>
    <div className="block">
      <div className="block__header">
        <i className="fa fa-question"></i> General questions
      </div>
      <div className="block__content">
        <p>For general questions about me or my projects, please contact me at this E-Mail address:</p>
        <p><strong>luna [at] nighty.cloud</strong></p>
      </div>
    </div>
    <div className="block">
      <div className="block__header">
        <i className="fa fa-paint-brush"></i> Art, collabs, trades, commissions
      </div>
      <div className="block__content">
        <p>I don't accept commissions or requests. For collabs or trades, please contact me on Discord or via any other social media platform where I am active.</p>
      </div>
    </div>
    <div className="block">
      <div className="block__header">
        <i className="fa fa-code"></i> Project recruitment, employment offers, business inquiries
      </div>
      <div className="block__content">
        <p>Please use the E-Mail below to contact me for purposes of recruitment into projects, offers of employment, or other business-related matters. Please make sure the topic of your message reflects the matters you wish to discuss precisely, and begins with "ATTN: ".</p>
        <p><strong>luna [at] nighty.cloud</strong></p>
      </div>
    </div>
  </div>;
}

export default ContactPage;
