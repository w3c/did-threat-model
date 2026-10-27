(function () {
  var threat = 
    {
      id: "T1",
      name: "Eavesdropping by a DID Resolution Service Provider",
      desc: "DID Resolution Service providers (<a>E4</a>) receive a significant amount of data that may reveal personal or proprietary information.",
      response: [
        {
          id: "R1",
          name: "Convey Threat Likelihood",
          type: "Transfer",
          desc: "When onboarding users to any particular DID Resolution Service Provider (<a>E4</a>), explicitly communicate the data use policy in terms that users can understand."
        },
        {
          id: "R2",
          name: "Purpose Binding",
          type: "Reduce",
          desc: "Restrict the use of data provided to DID Resolution Service Providers (<a>E4</a>) to explicit purpose as agreed to by the user (<a>E2</a>)."
        },
        {
          id: "R3",
          name: "Recommend Local Resolution",
          type: "Accept",
          desc: "When explaining DID Resolution, educate users (<a>E2</a>) about the tradeoffs of running a local resolver (<a>P4</a>) versus using a service provider (<a>E4</a>)."
        },
        {
          id: "R4",
          name: "Local Resolution",
          type: "Transfer",
          desc: "Use a locally controlled resolver (<a>P4</a>) rather than using a service provider (<a>E4</a>)."
        }
      ],
      elements: ["E4", "F6", "C4", "P4", "D6"],
      taxonomyName: "STRIDE",
      taxonomyClass: "Information Disclosure"
    };
   
  window.ThreatModel.register(threat);
})();
