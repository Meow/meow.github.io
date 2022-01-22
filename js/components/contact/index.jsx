import React from "react";

function ContactPage(_props) {
  return <div className="description">
    <h1><i className="fa fa-envelope"></i> Contact me</h1>
    <p>I am typically contactable on all of my social media. If you wish to contact me for a specific purpose, please read further.</p>
    
    <h3><i className="fa fa-question"></i> General questions</h3>
    <p>For general questions about me or my projects, please contact me at this E-Mail address:</p>
    <p><strong>luna [at] nighty.cloud</strong></p>
    
    <h3><i className="fa fa-paint-brush"></i> Art, collabs, trades, commissions</h3>
    <p>Please <strong>do not contact me at all</strong> about any art-related questions. I do not do art at this time. And hopefully never will.</p>

    <h3><i className="fa fa-code"></i> Project recruitment, employment offers, business inquiries</h3>
    <p>Please use the E-Mail below to contact me for purposes of recruitment into projects, offers of employment, or other business-related matters. Please make sure the topic of your message reflects the matters you wish to discuss precisely, and begins with "ATTN: ".</p>
    <p><strong>luna [at] nighty.cloud</strong></p>
  </div>;
}

export default ContactPage;
