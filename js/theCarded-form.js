var getYesNoChoice = function () {
    var choice = {
        options: ["Yes", "No"],
        choice: ko.observable("")
    };
    return choice;
};

var viewModel = {
    whatHappened:
    {
        options:
            [
                "I was arrested or detained by the police.",
                "I was asked questions by the police."
            ],
        choice: ko.observable("")
    },
    questioningCircumstancesAllowed: getYesNoChoice(),
    identifyingInformation: getYesNoChoice(),
    tellYouWhy: getYesNoChoice(),
    invalidReason: getYesNoChoice(),
    tellYouRefuse: getYesNoChoice(),
    offerReceipt: getYesNoChoice()
};
ko.applyBindings(viewModel);
