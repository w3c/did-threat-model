(function () {
  var threat = // begin JSON 
{
  id: "T3",
  name: "Tampering by Proxy",
  desc: "Proxying resolvers (<a>P4</a>), who pass incoming resolution requests (<a>F6</a>) to another resolver before passing the result back, enable the initial resolver to manipulate all traffic to and from all proxied resolvers, including tampering with the fundamental result from resolution: the DID document (<a>D8</a>).",
  response: [
    {
      id: "R4",
      name: "Direct Resolution (repeat)",
      type: "Eliminate",
      desc: "Instead of using a proxying resolver, choose trustworthy first party resolvers (<a>P4</a>) with whom you communicate directly."
       },
    {
      id: "R5",
      name: "Local Resolution (repeat)",
      type: "Eliminate",
      desc: "Instead of using an external resolver, run your own resolver (<a>P4</a>)."
    },
    {
      id: "R6",
      name: "Terms of Service (no proxying) (repeat)",
      type: "Transfer",
      desc: "Use explicit terms of service that include a commitment to performing resolution directly instead of proxying to third party services. This provides explicit documentation of expectations, and legal accountability should the resolving party (<a>E4</a>) break that agreement."
    },

    {
          id: "R7",
          name: "Terms of Service (no tampering)",
          type: "Transfer",
          desc: "Use explicit terms of service that include a commitment to delivering authentic, unmodified resolution results (<a>D8</a>, <a>D9</a>, <a>D10</a>). This provides explicit documentation of expectations and legal accountability should the resolving party (<a>E4</a>) break that agreement."
      },
    {
      id: "R8",
      name: "Duty of Care (repeat)",
      type: "Transfer",
      desc: "Establish legally enforced duty of care, either by statute or precedent, which holds resolvers (<a>E4</a>) responsible as agents acting on behalf of clients (<a>E2</a>). Duty of care pertains to the treatment of sensitive data in their possession. This response likely entails both contractual elements and either legislative or court-based engagement, or, more likely, both."      
     },
    {
      id: "R9",
      name: "Duty of Loyalty (repeat)",
      type: "Transfer",
      desc: "Establish legally enforced duty of loyalty, either by statute or precedent, which holds resolvers (<a>E4</a>) responsible as agents acting on behalf of clients (<a>E2</a>). Duty of loyalty pertains to the use of sensitive data contrary to the interest of the client. This response likely entails both contractual elements and either legislative or court-based engagement, or, more likely, both."
    },
    {
      id: "R10",
      name: "Trust (repeat)",
      type: "Accept",
      desc: "The DID security model depends on trusting (<a>T2</a>) the resolver (<a>P4</a>) to honestly return the result from each DID's resolution process. Given the necessary trust for executing a complex algorithm correctly, clients can choose to also trust the resolver to select trustworthy secondary resolvers."
    },
      {
          id: "R11",
          name: "Signed Resolution Results",
          type: "Eliminate",
          desc: "Have secondary resolvers add a tamper-evident, cryptographic signature to all results returned to the proxy, ensuring the calling client (<a>P3</a>) can verify the result has not been tampered with by the proxying resolver. This requires the client to either know or be able to verify the public key or cryptographic identifier used to generate the signature."
      },
      {
          id: "Rx",
          name: "Include resolution metadata",
          type: "Reduce",
          desc: "Include resolution metadata (<a>D10</a>) from proxied resolvers in the result to the primary resolution request (<a>F6</a>)."
      }
  ],
  elements: [],
  taxonomyName: "STRIDE",
  taxonomyClass: "Tampering"
};

  window.ThreatModel.register(threat);
})();