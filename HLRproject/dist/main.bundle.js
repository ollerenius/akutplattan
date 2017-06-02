webpackJsonp([1,4],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HLRDosageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Service used to transfer medicine dosage information from barnhlrsettings to the hlr flow.
 */
var HLRDosageService = (function () {
    function HLRDosageService() {
        /**
         * Standard doses and compressions for an adult.
         */
        this.adultAdrenaline = 1;
        this.adultAmiodarone = 300;
        this.adultCompressions = "30:2";
        this.adultJoule = 0; // Set to 0 to simplify visibility toggling
        /**
         * Standard compressions for a child.
         */
        this.childCompressions = "15:2";
        /**
         * Initial values assigned to dosage and compressions, being dosages for an adult.
         */
        this.adrenaline = this.adultAdrenaline;
        this.amiodarone = this.adultAmiodarone;
        this.compressions = this.adultCompressions;
        this.joule = this.adultJoule;
    }
    /**
     * Sets the dosage and compression values to that of a child with the given weight.
     * @param weightKg : number The weight of the child in kilograms.
     */
    HLRDosageService.prototype.setChildCPRValues = function (weightKg) {
        this.setDosagesFromWeight(weightKg);
        this.compressions = this.childCompressions;
    };
    /**
     * Sets the dosage and compression values to that of an adult. These values are fixed.
     */
    HLRDosageService.prototype.setAdultCPRValues = function () {
        this.setAdultDosage();
        this.compressions = this.adultCompressions;
        this.joule = this.adultJoule;
    };
    /**
     * Sets the medicine dosage to the default values for an adult.
     */
    HLRDosageService.prototype.setAdultDosage = function () {
        this.adrenaline = this.adultAdrenaline;
        this.amiodarone = this.adultAmiodarone;
    };
    /**
     * Sets the doses for a person based on the persons weight. This is primarily used for child CPR.
     * @param weightKg : number The persons weight in kg.
     */
    HLRDosageService.prototype.setDosagesFromWeight = function (weightKg) {
        /**
         * From table:
         * Adrenaline = (0.1 mg/ml) 0.01 mg/kg, 0.1 ml/kg
         * Amiodarone = 15 mg/ml* 5 mg/kg, 0.33 ml/kg
         * Joule = 4 J/kg
         */
        if (weightKg < 50) {
            this.adrenaline = Math.round(weightKg * 0.01 * 100) / 100;
            this.amiodarone = Math.round(weightKg * 5); //TODO: Double-check these dosage values for corresponding weights
        }
        else {
            this.setAdultDosage();
        }
        // Even big children hearts take damage if defibrillated with higher then 150 joule
        if (4 * weightKg > 150) {
            this.joule = 150;
        }
        else {
            this.joule = 4 * weightKg;
        }
    };
    HLRDosageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], HLRDosageService);
    return HLRDosageService;
}());
//# sourceMappingURL=hlrdosage.service.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step; });
/**
 * This class contains data for each step of the HLR flow.
 * Each Step instance is associated with exactly one hlrstep component
 * (see ./hlrstep/hlrstep.component.ts for implementation details).
 *
 * The Step instances are created in the hlrflow component
 * (./hlrflow.component.ts) when the flow is first created and when
 * it is expanded.
 */
var Step = (function () {
    function Step(amiodaroneDose, adrenalineDose, defibrilate, radioModel, heartMassage) {
        this.amiodaroneDose = amiodaroneDose;
        this.adrenalineDose = adrenalineDose;
        this.defibrilate = defibrilate;
        this.radioModel = radioModel;
        this.heartMassage = heartMassage;
        /**
         * currentStepIndex:
         * The index of the currently active step.
         * When a change is registered by the parent component, this value
         * will be changed to reflect that.
         * @type {number}
         */
        this.currentStepIndex = 0;
        this.showAdrenalineDose = false;
        this.showAmiodaroneDose = false;
        this.showBoltPicture = true;
        this.index = Step.ASSIGN_INDEX++;
        if (this.index == 4) {
            if (this.amiodaroneDose == 300) {
                this.amiodaroneDose = amiodaroneDose / 2;
            }
        }
        // Should this step show the adrenaline-button?
        if ((this.index == 2) || (this.index == 4)) {
            this.showAmiodaroneDose = true;
        }
        // Should this step show the amiodaron-button?
        if (((this.index % 2) == 0) && (this.index != 0)) {
            this.showAdrenalineDose = true;
        }
    }
    /**
     * When finishing a flow, call this function to reset the assign
     * index variable, making the next flow start at index 0.
     */
    Step.resetAssignIndex = function () {
        Step.ASSIGN_INDEX = 0;
    };
    /**
     * ASSIGN_INDEX:
     * The index of how many new steps that have been generated.
     * When a new step is generated, this value will be incremented with 1.
     * The variable is reset to 0 by calling resetAssignIndex().
     * @type {number}
     */
    Step.ASSIGN_INDEX = 0;
    return Step;
}());
//# sourceMappingURL=step.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarnHLRService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Contains the values and functions for transferring data between the barnhlr->barnhlrsettings page.
 */
var BarnHLRService = (function () {
    function BarnHLRService() {
        /**
         * Contains a boolean value corresponding to whether the weight was known or not in the barnhlr->barnhlrsettings navigation.
         */
        this.isWeightKnown = false;
    }
    BarnHLRService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], BarnHLRService);
    return BarnHLRService;
}());
//# sourceMappingURL=barnhlr.service.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mainmenu_mainmenu_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_barnhlr_barnhlr_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_barnhlrsettings_barnhlrsettings_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_log_log_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_hlr_hlr_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_respiratoryarrest_respiratoryarrest_component__ = __webpack_require__(319);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_mainmenu_mainmenu_component__["a" /* MainMenuComponent */] },
    { path: 'hlr', component: __WEBPACK_IMPORTED_MODULE_5__components_hlr_hlr_component__["a" /* HLRComponent */] },
    { path: 'log', component: __WEBPACK_IMPORTED_MODULE_4__components_log_log_component__["a" /* LogComponent */] },
    { path: 'barnhlr', component: __WEBPACK_IMPORTED_MODULE_2__components_barnhlr_barnhlr_component__["a" /* BarnHLRStartComponent */] },
    { path: 'barnhlr/calc', component: __WEBPACK_IMPORTED_MODULE_3__components_barnhlrsettings_barnhlrsettings_component__["a" /* BarnHLRSettingsComponent */] },
    { path: 'respiratoryarrest', component: __WEBPACK_IMPORTED_MODULE_6__components_respiratoryarrest_respiratoryarrest_component__["a" /* RespiratoryArrestComponent */] }];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxData; });
/**
 * Created by daniel on 4/4/17.
 */
/**
 * Defines the data that a checkbox contains. This is used to represent a checkbox outside of HTML (for use in TypeScript code).
 */
var CheckboxData = (function () {
    /**
     *
     * @param name The name of the checkbox object.
     * @param value The state that the checkbox currently is in (false/true)
     */
    function CheckboxData(name, value) {
        this.name = name;
        this.value = value;
    }
    return CheckboxData;
}());
//# sourceMappingURL=CheckboxData.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_barnhlr_service__ = __webpack_require__(197);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarnHLRStartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarnHLRStartComponent = (function () {
    function BarnHLRStartComponent(barnHLRService) {
        this.barnHLRService = barnHLRService;
    }
    BarnHLRStartComponent.prototype.ngOnDestroy = function () {
        this.barnHLRService.isWeightKnown = this.useAge;
    };
    BarnHLRStartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'barnhlr-page',
            template: __webpack_require__(565),
            styles: [__webpack_require__(541)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_barnhlr_service__["a" /* BarnHLRService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_barnhlr_service__["a" /* BarnHLRService */]) === 'function' && _a) || Object])
    ], BarnHLRStartComponent);
    return BarnHLRStartComponent;
    var _a;
}());
//# sourceMappingURL=barnhlr.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_barnhlr_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hlrdosage_service__ = __webpack_require__(133);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarnHLRSettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarnHLRSettingsComponent = (function () {
    function BarnHLRSettingsComponent(barnHLRService, hlrDosageService) {
        this.barnHLRService = barnHLRService;
        this.hlrDosageService = hlrDosageService;
        this.title = 'BarnHLR page';
        this.wetflag = "Ogiltig";
        this.inputRadioModel = "Ar";
        this.lastKeypadString = "";
        this.useAge = barnHLRService.isWeightKnown;
        if (this.useAge == true) {
            this.newCalcUnit = "vikt";
        }
        else {
            this.newCalcUnit = "ålder";
        }
    }
    BarnHLRSettingsComponent.prototype.onNotify = function (keypadString) {
        //This line is to make certain that the input type does not change after verifying the correct format
        this.lastKeypadString = keypadString; //Used for the purpose of updating the weight displayed when changing input type.
        this.updateDisplayedWetflagValue();
    };
    /**
     * Changes what input state we are in, age or weight.
     * @param currentState : boolean The current state
     */
    BarnHLRSettingsComponent.prototype.switchKeypad = function (currentState) {
        if (currentState == true) {
            this.useAge = false;
            this.newCalcUnit = "ålder";
        }
        else {
            this.useAge = true;
            this.newCalcUnit = "vikt";
        }
    };
    /**
     * Updates the displayed wetflag value, based on the last entried keypad string received.
     */
    BarnHLRSettingsComponent.prototype.updateDisplayedWetflagValue = function () {
        var inputType = this.inputRadioModel;
        if (this.verifyStringFromKeypad(this.lastKeypadString, inputType)) {
            var wetflagNumber = this._wetflagTransform(this.lastKeypadString, inputType);
            if (this.useAge == false) {
                //TODO: Race condition?
                this.wetflag = String(this.lastKeypadString + " kg");
                this.hlrDosageService.setChildCPRValues(Number(this.lastKeypadString));
            }
            else {
                this.wetflag = String(wetflagNumber + " kg");
                this.hlrDosageService.setChildCPRValues(Number(wetflagNumber));
            }
        }
        else {
            this.wetflag = "Ogiltig";
        }
    };
    /**
     * This function verifies that the input holds to the expected input type.
     * @param keypadString : string The input string to verify.
     * @param expectedInputType : string The expected input type.
     * @returns {boolean} True if input holds to the type specification, false if not.
     */
    BarnHLRSettingsComponent.prototype.verifyStringFromKeypad = function (keypadString, expectedInputType) {
        if (this.useAge == true && expectedInputType == "Personnummer") {
            return (keypadString.length == 8 || keypadString.length == 12) && !isNaN(Number(keypadString));
        }
        return !isNaN(Number(keypadString));
    };
    /**
     * Calculates the age of a (swedish) person number in months and returns it.
     * !!! REQUIRES EXTERNAL SANITY CHECK !!! (see this.verifyStringFromKeypad)
     * Pnumber is YYYYMMDD or YYYYMMDDxxxx so len(pn) == 8 | 12
     * @param pnumber A person number (last 4 digits optional and the last 6 will be ignored)
     * @returns {number} The age of the person, rounded to closest age in months.
     */
    BarnHLRSettingsComponent.prototype.pnToMonths = function (pnumber) {
        //TODO: This does NOT count days, what can be done is dDays - pnDays where 15 is round to 1 and lower 0 (in added months)
        //TODO: Better sanity check (pnYears > dYears is possible right now.. as well as pnMonths > 12)
        //TODO: Change format to YYMMDD / YYMMDDxxxx instead. This requires sanity check in form of rounding to the best full years (eg. not 19xx when xx=07 but not 20xx when xx=99)
        //Get current year, month and day.
        var date = new Date();
        var dYears = date.getFullYear();
        var dMonths = date.getMonth() + 1; //Otherwise 0 -> 11
        //Still, only the first 6 numbers is interesting.
        var pnYears = Number(pnumber.slice(0, 4));
        var pnMonths = Number(pnumber.slice(4, 6));
        return (dYears - pnYears) * 12 + (dMonths - pnMonths);
    };
    /**
     * Takes an age formatted in a chosen way and returns the estimated weight for that age.
     * @param ageStr : string The input string we want to calculate weight for.
     * @param inputType : string The input type string for which the age is formatted in.
     * @returns {number} The estimated weight.
     */
    BarnHLRSettingsComponent.prototype._wetflagTransform = function (ageStr, inputType) {
        var months = 0;
        var years = 0;
        switch (inputType) {
            case "Personnummer":
                months = this.pnToMonths(ageStr);
                years = Math.floor(months / 12);
                months -= years * 12;
                break;
            case "Ar":
                months = 0;
                years = Number(ageStr);
                break;
            case "Manader":
                months = Number(ageStr);
                years = Math.floor(months / 12);
                months -= years * 12;
                break;
            default:
                console.error("Undefined input radio model picked.");
                break;
        }
        var outputWetflag;
        if (years >= 13) {
            outputWetflag = 50;
        }
        else if (years >= 6 && years < 13) {
            outputWetflag = 3 * years + 7;
        }
        else if (years < 6 && years > 0) {
            outputWetflag = 2 * years + 8;
        }
        else if (years == 0) {
            outputWetflag = 0.5 * months + 4;
        }
        return outputWetflag;
    };
    BarnHLRSettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'barnhlrsettings-page',
            template: __webpack_require__(566),
            styles: [__webpack_require__(542)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_barnhlr_service__["a" /* BarnHLRService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_barnhlr_service__["a" /* BarnHLRService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_hlrdosage_service__["a" /* HLRDosageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_hlrdosage_service__["a" /* HLRDosageService */]) === 'function' && _b) || Object])
    ], BarnHLRSettingsComponent);
    return BarnHLRSettingsComponent;
    var _a, _b;
}());
//# sourceMappingURL=barnhlrsettings.component.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_logging_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_HLRItem__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_timer_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hlrflow_step__ = __webpack_require__(196);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HLRComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HLRComponent = (function () {
    function HLRComponent(loggingService, timerService) {
        this.loggingService = loggingService;
        this.timerService = timerService;
        this.title = 'HLR page';
    }
    //Simply prints the time which the HLR was initated to the log.
    HLRComponent.prototype.ngOnInit = function () {
        this.loggingService.addHLRItem("00:00:00", __WEBPACK_IMPORTED_MODULE_2__classes_HLRItem__["b" /* Defibrilate */].NONE, "", "HLR-förloppet startade vid klockan " + this.printCurrentTimeToLog(), __WEBPACK_IMPORTED_MODULE_2__classes_HLRItem__["c" /* Ruler */].NONE);
    };
    //the time function that is called when you want the current time.
    HLRComponent.prototype.printCurrentTimeToLog = function () {
        // Get time values
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        // Store the same values as strings
        var hoursString = String(hours);
        var minutesString = String(minutes);
        var secondsString = String(seconds);
        // Format strings properly
        if (hours < 10) {
            hoursString = '0' + hours;
        }
        if (minutes < 10) {
            minutesString = '0' + minutes;
        }
        if (seconds < 10) {
            secondsString = '0' + seconds;
        }
        return hoursString + ':' + minutesString + ':' + secondsString;
    };
    //The function that is called when the "avsluta"-button is pressed. Logs the end of the HLR-session.
    HLRComponent.prototype.goToLog = function () {
        //TODO: This >might< cause a race-condition with the timerService reset in the timer.component destructor. (It works most times tho)
        this.loggingService.addHLRItem(this.timerService.currentTimeString, __WEBPACK_IMPORTED_MODULE_2__classes_HLRItem__["b" /* Defibrilate */].NONE, "", "HLR-förloppet avslutades vid klockan " + this.printCurrentTimeToLog(), __WEBPACK_IMPORTED_MODULE_2__classes_HLRItem__["c" /* Ruler */].HLRFLOW);
        this.resetHLRFlow();
    };
    // This function resets the index for the steps to start from when creating a new HLR-flow
    HLRComponent.prototype.resetHLRFlow = function () {
        __WEBPACK_IMPORTED_MODULE_4__hlrflow_step__["a" /* Step */].resetAssignIndex();
    };
    HLRComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'hlr-page',
            template: __webpack_require__(569),
            styles: [__webpack_require__(545)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_logging_service__["a" /* LoggingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_logging_service__["a" /* LoggingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_timer_service__["a" /* TimerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_timer_service__["a" /* TimerService */]) === 'function' && _b) || Object])
    ], HLRComponent);
    return HLRComponent;
    var _a, _b;
}());
//# sourceMappingURL=hlr.component.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_HLRItem__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_logging_service__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogComponent = (function () {
    function LogComponent(loggingService) {
        this.loggingService = loggingService;
        this.title = 'Vårdlogg';
        this.hlrItems = [];
        //Have to make the enum visible to the scope of the html file
        this.defib = __WEBPACK_IMPORTED_MODULE_1__classes_HLRItem__["b" /* Defibrilate */];
        this.loggingService = loggingService;
        this.hlrItems = this.loggingService.getHLRItems();
    }
    /**
     * Returns the specific CSS corresponding to that Ruler enum in the log.
     * @param ruler : Ruler The Ruler enum for which a CSS class is requested
     * @returns {string} The CSS-class that corresponds to the specific ruler.
     */
    LogComponent.prototype.getRulerCSS = function (ruler) {
        switch (ruler) {
            case __WEBPACK_IMPORTED_MODULE_1__classes_HLRItem__["c" /* Ruler */].HLRSTEP:
                return "newstep";
            case __WEBPACK_IMPORTED_MODULE_1__classes_HLRItem__["c" /* Ruler */].HLRFLOW:
                return "endflow";
            default:
                return "";
        }
    };
    LogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'log-component',
            template: __webpack_require__(574),
            styles: [__webpack_require__(550)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_logging_service__["a" /* LoggingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_logging_service__["a" /* LoggingService */]) === 'function' && _a) || Object])
    ], LogComponent);
    return LogComponent;
    var _a;
}());
//# sourceMappingURL=log.component.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainMenuComponent = (function () {
    function MainMenuComponent() {
    }
    MainMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'mainmenu-page',
            template: __webpack_require__(575),
            styles: [__webpack_require__(551)]
        }), 
        __metadata('design:paramtypes', [])
    ], MainMenuComponent);
    return MainMenuComponent;
}());
//# sourceMappingURL=mainmenu.component.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RespiratoryArrestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RespiratoryArrestComponent = (function () {
    function RespiratoryArrestComponent() {
        this.respiratory_arrest_instruction_image = '../../../assets/images/respiratoryarrest.png';
    }
    RespiratoryArrestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'respiratory-arrest',
            template: __webpack_require__(576),
            styles: [__webpack_require__(552)]
        }), 
        __metadata('design:paramtypes', [])
    ], RespiratoryArrestComponent);
    return RespiratoryArrestComponent;
}());
//# sourceMappingURL=respiratoryarrest.component.js.map

/***/ }),

/***/ 358:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 358;


/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(485);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(564),
            styles: [__webpack_require__(540)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_mainmenu_mainmenu_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_header_header_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_log_log_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_logging_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_barnhlrsettings_barnhlrsettings_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_barnhlr_barnhlr_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_barnhlr_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_keypad_keypad_component__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_hlr_hlr_module__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_bootstrap_buttons__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_hlrdosage_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_respiratoryarrest_respiratoryarrest_component__ = __webpack_require__(319);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_mainmenu_mainmenu_component__["a" /* MainMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_barnhlrsettings_barnhlrsettings_component__["a" /* BarnHLRSettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_barnhlr_barnhlr_component__["a" /* BarnHLRStartComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_keypad_keypad_component__["a" /* KeyPadComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_log_log_component__["a" /* LogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_respiratoryarrest_respiratoryarrest_component__["a" /* RespiratoryArrestComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15_ng2_bootstrap_buttons__["a" /* ButtonsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_14__components_hlr_hlr_module__["a" /* HLRModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_barnhlr_service__["a" /* BarnHLRService */], __WEBPACK_IMPORTED_MODULE_8__services_logging_service__["a" /* LoggingService */], __WEBPACK_IMPORTED_MODULE_16__services_hlrdosage_service__["a" /* HLRDosageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HLRStepAttributes; });
/**
 * Each instance of an HLRStepAttribute corresponds a step event.
 * Each object contains information about what type of analysis we are doing in the current step,
 * as well as what direction we are going.
 *
 */
var HLRStepAttributes = (function () {
    /**
     * The constructor for HLRStepAttribute
     * @param stepDirection : string What direction we are stepping in, 'next' or 'prev'
     * @param currentAnalysisState : string What analysis type we are currently in, 'VT/VT' or 'Asy'
     */
    function HLRStepAttributes(stepDirection, currentAnalysisState) {
        this.stepDirection = stepDirection;
        this.currentAnalysisState = currentAnalysisState;
    }
    return HLRStepAttributes;
}());
//# sourceMappingURL=HLRStepAttributes.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/**
 * HeaderComponent is the component that contains the
 * "menu bar" at the top of the application.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.title = 'Akutvagn 1';
        this.hideInPaths = ['/', '/hlr'];
        this.leftArrow = '../assets/images/left-arrow.jpg';
        this.startClock();
    }
    /**
     * goBack() is called when clicking the back button in the header.
     * Functionality not yet implemented.
     */
    HeaderComponent.prototype.goBack = function () {
        var cur_route = this.router.url;
        var new_route;
        switch (cur_route) {
            /*
             New routes are added as such:
             case 'current_route':
             new_route = 'the_new_route';
             break;
             Where current and new routes always start with an /.
             */
            case '/hlr':
                new_route = '/';
                break;
            case '/log':
                new_route = '/';
                break;
            case '/barnhlr':
                new_route = '/';
                break;
            case '/barnhlr/calc':
                new_route = '/barnhlr';
                break;
            case '/respiratoryarrest':
                new_route = '/';
                break;
            default:
                new_route = '';
        }
        if (new_route !== '') {
            this.router.navigateByUrl(new_route);
        }
        console.log('You pressed the Back-button.');
    };
    /**
     * Use this method to set the current time and start the clock.
     * setInterval() will call updateClock once every second.
     */
    HeaderComponent.prototype.startClock = function () {
        var _this = this;
        this.updateClock();
        setInterval(function () {
            _this.updateClock();
        }, 1000);
    };
    /**
     * This method is called to get the current time.
     * That value is formatted properly and assigned to currentTime.
     */
    HeaderComponent.prototype.updateClock = function () {
        // Get time values
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        // Store the same values as strings
        var hoursString = String(hours);
        var minutesString = String(minutes);
        var secondsString = String(seconds);
        // Format strings properly
        if (hours < 10) {
            hoursString = '0' + hours;
        }
        if (minutes < 10) {
            minutesString = '0' + minutes;
        }
        if (seconds < 10) {
            secondsString = '0' + seconds;
        }
        this.currentTime = hoursString + ':' + minutesString + ':' + secondsString;
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'header-element',
            template: __webpack_require__(567),
            styles: [__webpack_require__(543)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a;
}());
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_logging_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_timer_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_HLRItem__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_CheckboxData__ = __webpack_require__(313);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChecklistComponent = (function () {
    function ChecklistComponent(timerService, loggingService) {
        this.timerService = timerService;
        this.loggingService = loggingService;
        //Contains the rows of checkboxes that we want to place in the html.
        this.checkboxRows = [];
        this.checkboxDataList = [];
        this.title = 'Checklist';
    }
    ChecklistComponent.prototype.ngOnInit = function () {
        this.setupCheckboxes();
        this.setupCheckboxRows();
    };
    //Setups the checkbox rows that are looped through in the .html file.
    ChecklistComponent.prototype.setupCheckboxRows = function () {
        var elementsPerRow = 4;
        var currentElementInRow = 0;
        var nextRow = [];
        for (var i = 0; i < this.checkboxDataList.length; i++) {
            if (currentElementInRow >= elementsPerRow) {
                this.checkboxRows.push(nextRow);
                nextRow = [];
                currentElementInRow = 0;
            }
            nextRow.push(this.checkboxDataList[i]);
            currentElementInRow++;
        }
        if (nextRow.length > 0) {
            this.checkboxRows.push(nextRow);
        }
    };
    //This will setup the standard-option checkbox-list
    ChecklistComponent.prototype.setupCheckboxes = function () {
        this.checkboxDataList.push(new __WEBPACK_IMPORTED_MODULE_4__classes_CheckboxData__["a" /* CheckboxData */]("Larma", false));
        this.checkboxDataList.push(new __WEBPACK_IMPORTED_MODULE_4__classes_CheckboxData__["a" /* CheckboxData */]("Pvk", false));
        this.checkboxDataList.push(new __WEBPACK_IMPORTED_MODULE_4__classes_CheckboxData__["a" /* CheckboxData */]("Hjärtbräda", false));
        this.checkboxDataList.push(new __WEBPACK_IMPORTED_MODULE_4__classes_CheckboxData__["a" /* CheckboxData */]("Journal", false));
        this.checkboxDataList.push(new __WEBPACK_IMPORTED_MODULE_4__classes_CheckboxData__["a" /* CheckboxData */]("Ringer-Acetat", false));
        this.checkboxDataList.push(new __WEBPACK_IMPORTED_MODULE_4__classes_CheckboxData__["a" /* CheckboxData */]("Svalgtub", false));
        this.checkboxDataList.push(new __WEBPACK_IMPORTED_MODULE_4__classes_CheckboxData__["a" /* CheckboxData */]("Syrgas", false));
        this.checkboxDataList.push(new __WEBPACK_IMPORTED_MODULE_4__classes_CheckboxData__["a" /* CheckboxData */]("Hjärtstoppsrapport", false));
        this.checkboxDataList.push(new __WEBPACK_IMPORTED_MODULE_4__classes_CheckboxData__["a" /* CheckboxData */]("Narkos", false));
        this.checkboxDataList.push(new __WEBPACK_IMPORTED_MODULE_4__classes_CheckboxData__["a" /* CheckboxData */]("Medicinjour", false));
        this.checkboxDataList.push(new __WEBPACK_IMPORTED_MODULE_4__classes_CheckboxData__["a" /* CheckboxData */]("Anhöriga", false));
    };
    ChecklistComponent.prototype.addToLog = function (information, state) {
        //The state is inverted to what it actually is, due to the click event and checkbox value change happening at the same time
        if (!state) {
            this.loggingService.addHLRItem(this.timerService.currentTimeString, __WEBPACK_IMPORTED_MODULE_3__classes_HLRItem__["b" /* Defibrilate */].NONE, "", "Checkbox '" + information + "' har markerats.", __WEBPACK_IMPORTED_MODULE_3__classes_HLRItem__["c" /* Ruler */].NONE);
        }
        else {
            this.loggingService.addHLRItem(this.timerService.currentTimeString, __WEBPACK_IMPORTED_MODULE_3__classes_HLRItem__["b" /* Defibrilate */].NONE, "", "Checkbox '" + information + "' har avmarkerats.", __WEBPACK_IMPORTED_MODULE_3__classes_HLRItem__["c" /* Ruler */].NONE);
        }
    };
    ChecklistComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'checklist',
            template: __webpack_require__(568),
            styles: [__webpack_require__(544)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_timer_service__["a" /* TimerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_timer_service__["a" /* TimerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_logging_service__["a" /* LoggingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_logging_service__["a" /* LoggingService */]) === 'function' && _b) || Object])
    ], ChecklistComponent);
    return ChecklistComponent;
    var _a, _b;
}());
//# sourceMappingURL=checklist.component.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_popover__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_buttons__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hlr_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__checklist_checklist_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hlrflow_hlrflow_component__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hlrflow_hlrstep_hlrstep_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__timer_timer_component__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_timer_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_hlrdosage_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_app_routes__ = __webpack_require__(312);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HLRModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var HLRModule = (function () {
    function HLRModule() {
    }
    HLRModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__hlr_component__["a" /* HLRComponent */],
                __WEBPACK_IMPORTED_MODULE_7__checklist_checklist_component__["a" /* ChecklistComponent */],
                __WEBPACK_IMPORTED_MODULE_8__hlrflow_hlrflow_component__["a" /* HLRFlowComponent */],
                __WEBPACK_IMPORTED_MODULE_9__hlrflow_hlrstep_hlrstep_component__["a" /* HlrstepComponent */],
                __WEBPACK_IMPORTED_MODULE_10__timer_timer_component__["a" /* TimerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_popover__["a" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_buttons__["a" /* ButtonsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_app_routes__["a" /* routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_timer_service__["a" /* TimerService */], __WEBPACK_IMPORTED_MODULE_12__services_hlrdosage_service__["a" /* HLRDosageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__hlr_component__["a" /* HLRComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], HLRModule);
    return HLRModule;
}());
//# sourceMappingURL=hlr.module.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__step__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hlrdosage_service__ = __webpack_require__(133);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HLRFlowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HLRFlowComponent = (function () {
    function HLRFlowComponent(hlrDosageService) {
        this.hlrDosageService = hlrDosageService;
        this.currentStepIndex = 0;
        var amiodarone = hlrDosageService.amiodarone;
        var adrenaline = hlrDosageService.adrenaline;
        var compressions = hlrDosageService.compressions;
        this.steps = [
            new __WEBPACK_IMPORTED_MODULE_1__step__["a" /* Step */](amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
            new __WEBPACK_IMPORTED_MODULE_1__step__["a" /* Step */](amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
            new __WEBPACK_IMPORTED_MODULE_1__step__["a" /* Step */](amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
            new __WEBPACK_IMPORTED_MODULE_1__step__["a" /* Step */](amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
            new __WEBPACK_IMPORTED_MODULE_1__step__["a" /* Step */](amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
            new __WEBPACK_IMPORTED_MODULE_1__step__["a" /* Step */](amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
            new __WEBPACK_IMPORTED_MODULE_1__step__["a" /* Step */](amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
            new __WEBPACK_IMPORTED_MODULE_1__step__["a" /* Step */](amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
            new __WEBPACK_IMPORTED_MODULE_1__step__["a" /* Step */](amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
            new __WEBPACK_IMPORTED_MODULE_1__step__["a" /* Step */](amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
            new __WEBPACK_IMPORTED_MODULE_1__step__["a" /* Step */](amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
            new __WEBPACK_IMPORTED_MODULE_1__step__["a" /* Step */](amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
            new __WEBPACK_IMPORTED_MODULE_1__step__["a" /* Step */](amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
            new __WEBPACK_IMPORTED_MODULE_1__step__["a" /* Step */](amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
            new __WEBPACK_IMPORTED_MODULE_1__step__["a" /* Step */](amiodarone, adrenaline, false, "VF/VT_alternative", compressions)
        ];
        this.jouleText = "Defibrillera med en styrka av " + String(hlrDosageService.joule) + " Joule";
    }
    HLRFlowComponent.prototype.ngOnDestroy = function () {
        this.hlrDosageService.setAdultCPRValues(); //Resets the dosage to an adult dose after a flow has been terminated.
    };
    /**
     * A getter used to tell if the joule data is to be visible.
     * The joule data is only supposed to be visible during children-CPR.
     * @returns {boolean}
     */
    HLRFlowComponent.prototype.hideJoule = function () {
        return (this.hlrDosageService.joule == 0);
    };
    /**
     * Current solution: once a change is triggered from the current step
     * (every instance of the HLR Step component must check if it is the
     *  current one before triggering) this method goes to the next step.
     */
    /**
     * Updates the currentStepIndex and upcoming analysis step to reflect the properties in the current step,
     * depending on whether the stepDirection is 'next' or 'prev'.
     * @param stepEvent : HLRStepAttributes The event data related to the current step triggering the event.
     */
    HLRFlowComponent.prototype.changeStep = function (stepEvent) {
        for (var _i = 0, _a = this.steps; _i < _a.length; _i++) {
            var step = _a[_i];
            if ((step.index >= this.currentStepIndex) && (stepEvent.stepDirection == 'next')) {
                step.radioModel = stepEvent.currentAnalysisState;
                if (step.index > this.currentStepIndex) {
                    step.showBoltPicture = (step.radioModel != "Asystoli/PEA_alternative");
                    if ((step.index == 2) || (step.index == 4)) {
                        step.showAmiodaroneDose = (step.radioModel != "Asystoli/PEA_alternative");
                    }
                }
            }
            if (stepEvent.stepDirection == 'next') {
                step.currentStepIndex = this.currentStepIndex + 1;
            }
            else if ((stepEvent.stepDirection == 'prev') && (this.currentStepIndex > 0)) {
                step.currentStepIndex = this.currentStepIndex - 1;
            }
        }
        if (stepEvent.stepDirection == 'next') {
            this.currentStepIndex++;
            // Add a new step
            if (this.currentStepIndex > this.steps.length - HLRFlowComponent.MAX_STEP_MARGIN) {
                var step = new __WEBPACK_IMPORTED_MODULE_1__step__["a" /* Step */](this.hlrDosageService.amiodarone, this.hlrDosageService.adrenaline, false, stepEvent.currentAnalysisState, "30:2");
                step.showBoltPicture = step.radioModel != "Asystoli/PEA_alternative";
                this.steps.push(step);
            }
        }
        else if ((stepEvent.stepDirection == 'prev') && (this.currentStepIndex > 0)) {
            this.currentStepIndex--;
        }
    };
    /**
     * A constant declaring the maximum number of steps between the current
     * and the last one, i.e. determines when the flow needs to be expanded.
     * @type {number}
     */
    HLRFlowComponent.MAX_STEP_MARGIN = 5;
    HLRFlowComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'hlrflow',
            template: __webpack_require__(570),
            styles: [__webpack_require__(546)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_hlrdosage_service__["a" /* HLRDosageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_hlrdosage_service__["a" /* HLRDosageService */]) === 'function' && _a) || Object])
    ], HLRFlowComponent);
    return HLRFlowComponent;
    var _a;
}());
//# sourceMappingURL=hlrflow.component.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__step__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_logging_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_timer_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_HLRItem__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_HLRStepAttributes__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_CheckboxData__ = __webpack_require__(313);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HlrstepComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HlrstepComponent = (function () {
    function HlrstepComponent(loggingService, timerService) {
        this.loggingService = loggingService;
        this.timerService = timerService;
        this.changeStepNotifierEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* EventEmitter */]();
        // BOLT BUTTON
        this.boltFilledPath = '../../../../assets/images/bolt-filled-small.png';
        this.boltOutlinePath = '../../../../assets/images/bolt-outline-small.png';
        this.boltFullPath = this.boltOutlinePath;
    }
    /**
     * This method is called when the 'next' or 'previous' button is pressed.
     * If this step is the currently active one (as specified by Step.currentStepIndex)
     * it will emit a message to the parent component. If not, it will do nothing.
     */
    HlrstepComponent.prototype.changeStepNotifier = function (stepDirection) {
        var hlrStepAttributes = new __WEBPACK_IMPORTED_MODULE_5__classes_HLRStepAttributes__["a" /* HLRStepAttributes */](stepDirection, this.step.radioModel);
        if (this.step.currentStepIndex == this.step.index) {
            this.changeStepNotifierEmitter.emit(hlrStepAttributes);
            if (stepDirection == 'next') {
                this.addToLog("Fortsatte till nästa steg i tillstånd " +
                    this.getStringFromAnalysisButton(), __WEBPACK_IMPORTED_MODULE_4__classes_HLRItem__["b" /* Defibrilate */].NONE, __WEBPACK_IMPORTED_MODULE_4__classes_HLRItem__["c" /* Ruler */].HLRSTEP);
            }
            else if ((stepDirection == 'prev') && (this.step.index != 0)) {
                this.addToLog("Backade till föregående steg!", __WEBPACK_IMPORTED_MODULE_4__classes_HLRItem__["b" /* Defibrilate */].NONE, __WEBPACK_IMPORTED_MODULE_4__classes_HLRItem__["c" /* Ruler */].HLRSTEP);
            }
        }
    };
    HlrstepComponent.prototype.addToLog = function (information, defibrilate, ruler) {
        this.loggingService.addHLRItem(this.timerService.currentTimeString, defibrilate, this.step.heartMassage, information, ruler);
    };
    HlrstepComponent.prototype.getStringFromAnalysisButton = function () {
        var str_button = this.step.radioModel.toString();
        switch (str_button) {
            case "VF/VT_alternative":
                return "VF/VT";
            case "Asystoli/PEA_alternative":
                return "Asystoli/PEA";
            default:
                console.log("Alternative not defined - getStringFromAnalysisButton");
                return "not defined";
        }
    };
    HlrstepComponent.prototype.pressedMedicineButton = function (medicineString, state) {
        var logString = "";
        switch (medicineString) {
            case "adrenaline":
                logString += this.adrenaline.name;
                break;
            case "amiodarone":
                logString += this.amiodarone.name;
                break;
            default:
                logString += "ERROR";
                break;
        }
        //Inverted as we go from state -> !state during this click.
        if (!state) {
            logString += " har administrerats.";
        }
        else {
            logString += " har ångrats.";
        }
        this.addToLog(logString, __WEBPACK_IMPORTED_MODULE_4__classes_HLRItem__["b" /* Defibrilate */].NONE, __WEBPACK_IMPORTED_MODULE_4__classes_HLRItem__["c" /* Ruler */].NONE);
    };
    HlrstepComponent.prototype.ngOnInit = function () {
        this.adrenaline = new __WEBPACK_IMPORTED_MODULE_6__classes_CheckboxData__["a" /* CheckboxData */]('Adrenalin: ' + this.step.adrenalineDose.toString() + ' mg', false);
        this.amiodarone = new __WEBPACK_IMPORTED_MODULE_6__classes_CheckboxData__["a" /* CheckboxData */]('Amiodarone: ' + this.step.amiodaroneDose.toString() + ' mg', false);
    };
    HlrstepComponent.prototype.changeImage = function () {
        if (this.step.defibrilate) {
            this.boltFullPath = this.boltOutlinePath;
            this.step.defibrilate = false;
            this.addToLog("Defibrilering ångrad!", __WEBPACK_IMPORTED_MODULE_4__classes_HLRItem__["b" /* Defibrilate */].FALSE, __WEBPACK_IMPORTED_MODULE_4__classes_HLRItem__["c" /* Ruler */].NONE);
        }
        else {
            this.boltFullPath = this.boltFilledPath;
            this.step.defibrilate = true;
            this.addToLog("Defibrilering utförd!", __WEBPACK_IMPORTED_MODULE_4__classes_HLRItem__["b" /* Defibrilate */].TRUE, __WEBPACK_IMPORTED_MODULE_4__classes_HLRItem__["c" /* Ruler */].NONE);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__step__["a" /* Step */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__step__["a" /* Step */]) === 'function' && _a) || Object)
    ], HlrstepComponent.prototype, "step", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* EventEmitter */]) === 'function' && _b) || Object)
    ], HlrstepComponent.prototype, "changeStepNotifierEmitter", void 0);
    HlrstepComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'hlrstep',
            template: __webpack_require__(571),
            styles: [__webpack_require__(547)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_logging_service__["a" /* LoggingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_logging_service__["a" /* LoggingService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_timer_service__["a" /* TimerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_timer_service__["a" /* TimerService */]) === 'function' && _d) || Object])
    ], HlrstepComponent);
    return HlrstepComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=hlrstep.component.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_timer_service__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimerComponent = (function () {
    function TimerComponent(timerService) {
        this.timerService = timerService;
        this.currentTime = "00:00:00";
        this.timeElapsed = 0;
        this.startTimer();
    }
    TimerComponent.prototype.ngOnDestroy = function () {
        this.destroyTimer();
    };
    /**
     * Destroys and resets the timer object, so that it doesn't reflect its previous state in a later appearance.
     */
    TimerComponent.prototype.destroyTimer = function () {
        clearInterval(this.timer);
        this.timerService.currentTimeString = "00:00:00";
    };
    /**
     * Initiates the clock of the timer.
     */
    TimerComponent.prototype.startTimer = function () {
        var _this = this;
        this.updateTimer();
        this.timer = setInterval(function () {
            _this.updateTimer();
        }, 1000);
    };
    /**
     * This method is called to get the current time.
     * That value is formatted properly and assigned to currentTime.
     */
    TimerComponent.prototype.updateTimer = function () {
        // Store the same values as strings
        this.timeElapsed++;
        var seconds = this.timeElapsed;
        var hours = Math.floor(seconds / 3600);
        seconds -= hours * 3600;
        var minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;
        var hoursString = String(hours);
        var minutesString = String(minutes);
        var secondsString = String(seconds);
        // Format strings properly
        if (hours < 10) {
            hoursString = '0' + hours;
        }
        if (minutes < 10) {
            minutesString = '0' + minutes;
        }
        if (seconds < 10) {
            secondsString = '0' + seconds;
        }
        this.currentTime = hoursString + ':' + minutesString + ':' + secondsString;
        this.timerService.currentTimeString = this.currentTime;
    };
    TimerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'hlr-timer',
            template: __webpack_require__(572),
            styles: [__webpack_require__(548)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_timer_service__["a" /* TimerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_timer_service__["a" /* TimerService */]) === 'function' && _a) || Object])
    ], TimerComponent);
    return TimerComponent;
    var _a;
}());
//# sourceMappingURL=timer.component.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyPadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var KeyPadComponent = (function () {
    /**
     * @param input Takes the attribute which is named and puts its value as a string to display as a placeholder in the keypad textfield
     */
    function KeyPadComponent(input) {
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* EventEmitter */]();
        this.keypad_placeholder = "...";
        this.keypad_res = "";
        this.keypad_placeholder = input;
    }
    /**
     * Handles all actions that are to be triggered when a keypad button is pressed.
     * @param pressedKey : string The key which was pressed on the keypad.
     */
    KeyPadComponent.prototype.handleInput = function (pressedKey) {
        switch (pressedKey) {
            case 'C':
                this.keypad_res = "";
                break;
            case '<-':
                if (this.keypad_res.length != 0) {
                    this.keypad_res = this.keypad_res.slice(0, this.keypad_res.length - 1);
                }
                break;
            default:
                if ("0123456789".indexOf(pressedKey) != -1) {
                    this.keypad_res += pressedKey;
                }
                else {
                    console.error("Invalid key pressed on keypad: " + pressedKey);
                }
                break;
        }
        this.notify.emit(this.keypad_res);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* EventEmitter */]) === 'function' && _a) || Object)
    ], KeyPadComponent.prototype, "notify", void 0);
    KeyPadComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'keypad-comp',
            template: __webpack_require__(573),
            styles: [__webpack_require__(549)]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Attribute */])('placeholder')), 
        __metadata('design:paramtypes', [String])
    ], KeyPadComponent);
    return KeyPadComponent;
    var _a;
}());
//# sourceMappingURL=keypad.component.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".barnhlr-start-page-div{\n  font-size: 40px;\n  margin-top: 10%;\n}\n\n.start-text{\n  text-align: center;\n  padding-bottom: 20px;\n}\n\n.start-text h1{\n  font-size: 80px;\n}\n\n.barnhlr-button{\n  padding: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".barnhlr-choose{\n  padding: 0px 40px 40px 40px;\n  font-size: 42px;\n}\n.messaure-buttons{\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.btn {\n  display: inline-block;\n  background-color: white;\n  border: 1px solid black;\n  color: black;\n  font-size: 20px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.btn:active {\n  background-color: darkgreen;\n}\n.green-box {\n  background-color: green;\n}\n\n#acceptButton{\n  padding: 20px 40px;\n  margin: 5px 5px;\n  font-size: 30px;\n}\n\n#changeButton{\n  padding: 20px 40px;\n  margin: 5px 5px;\n  font-size: 30px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "#headerElement {\n  height: 70px;\n}\n\n.img-responsive {\n  display: block;\n  width: auto;\n  max-height: 100%;\n\n}\n\n.row {\n  border-bottom: 1px solid #ccc;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".checkb {\n  background-color: white;\n  border-radius: 8px;\n  border: 1px solid black;\n  color: black;\n  font-size: 18px;\n  padding: 8px 10px;\n  width: 100%;\n}\n.checkb:active {\n  background-color: darkgreen;\n}\n.green-box {\n  background-color: green;\n  color: white;\n}\n\n#space{\n  margin: 8px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "\n.hlrflow{\n    width: 100%;\n    height: 100%;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    white-space: nowrap;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".step {\n  width: auto;\n  height: 100%;\n  display: inline-block;\n  float: none;\n}\n\n.hlr-border{\n  border: 2px solid red;\n}\n\n.def-button {\n  padding: 5px;\n  height: 60px;\n  width: 60px;\n}\n\n.def-image {\n  position: relative;\n  display: block;\n  margin: auto;\n  width: 45px;\n  height: 45px;\n}\n\n#heart-massage {\n  font-size: medium;\n}\n\n.btn-danger {\n  background-color: white;\n  color: black;\n}\n\n.btn-danger.active {\n  background-color: darkred;\n  color: white;\n}\n\n.hideButton {\n  visibility: hidden;\n}\n\n.checkb {\n  background-color: white;\n  border-radius: 8px;\n  border: 1px solid black;\n  color: black;\n  /* font-size: 18px; */\n  padding: 8px 30px;\n  width: 100%;\n}\n\n#amiodarone-button:active {\n  background-color: darkgreen;\n}\n\n#adrenaline-button:active {\n  background-color: darkblue;\n}\n\n.green-box {\n  background-color: green;\n  color: white;\n}\n\n.blue-box {\n  background-color: blue;\n  color: white;\n}\n\n.disabled-step {\n  pointer-events: none;\n  background-color: rgba(191,191,191,0.4);\n  opacity: 0.7;\n}\n\n.panel-body {\n  padding: 10px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".h2{\n  margin: 0px;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".keypad-frame{\n   font-size: 40px;\n}\n\n.keypad-button{\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".icon-format{\n  width: 20px;\n  height: 20px;\n  display:inline-block;\n  padding: 1px;\n}\n\n.newstep{\n  border-bottom: 3px solid black;\n}\n\n.endflow{\n  border-bottom: 4px double darkred;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".btn-mainmenu {\n  padding: 20% 0 20% 0;\n  margin-top: 3%;\n  width: 50%;\n  font-size: xx-large;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".img-center{\n  display: block;\n  margin: 0 auto;\n}\n\n/*This image setting adjusts the image to any device screen so scrolls don't appear */\nimg {\n  max-width: 100%;\n  height: auto;\n  width: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 564:
/***/ (function(module, exports) {

module.exports = "<header-element>\n</header-element>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 565:
/***/ (function(module, exports) {

module.exports = "<div class=\"barnhlr-start-page-div\">\n  <div class=\"start-text row\">\n    <h1>Känd vikt?</h1>\n  </div>\n  <div class=\"row\">\n    <button class=\"barnhlr-button btn-large col-xs-4 col-xs-offset-1 col-sm-4 col-sm-offset-1 col-md-4 col-md-offset-1 btn-success\" (click)=\"useAge=false\" [routerLink]=\"['/barnhlr/calc']\">Ja</button>\n    <button class=\"barnhlr-button btn-large col-xs-4 col-xs-offset-2 col-sm-4 col-sm-offset-2 col-md-4 col-md-offset-2 btn-danger\" (click)=\"useAge=true\" [routerLink]=\"['/barnhlr/calc']\">Nej</button>\n</div>\n</div>\n\n"

/***/ }),

/***/ 566:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"useAge == true\">\n   <div class=\"col-xs-offset-0 col-sm-offset-1 col-md-offset-3 col-xs-12 col-sm-10 col-md-6\">\n         <div class=\"row\">\n         <label class=\"btn btn-lg col-md-4\" [(ngModel)]=\"inputRadioModel\"\n                btnRadio=\"Manader\" [class.green-box]=\"inputRadioModel=='Manader'\" (click)=\"updateDisplayedWetflagValue()\">\n            Månader\n         </label>\n         <label class=\"btn btn-lg col-md-4\" [(ngModel)]=\"inputRadioModel\"\n                btnRadio=\"Ar\" [class.green-box]=\"inputRadioModel=='Ar'\" (click)=\"updateDisplayedWetflagValue()\">\n            År\n         </label>\n         <label class=\"btn btn-lg col-md-4\" [(ngModel)]=\"inputRadioModel\"\n                btnRadio=\"Personnummer\" [class.green-box]=\"inputRadioModel=='Personnummer'\" (click)=\"updateDisplayedWetflagValue()\">\n            Personnummer\n         </label>\n      </div>\n   </div>\n</div>\n <div class=\"row\">\n   <div class=\"col-xs-offset-0 col-sm-offset-1 col-md-offset-3 col-xs-12 col-sm-10 col-md-6\">\n       <keypad-comp *ngIf=\"useAge == true\" (notify)='onNotify($event)' placeholder='Ange ålder...'></keypad-comp>\n       <keypad-comp *ngIf=\"useAge == false\" (notify)='onNotify($event)' placeholder='Ange vikt...'></keypad-comp>\n   </div>\n </div>\n\n <div class=\"row\">\n   <div class=\"barnhlr-choose\">\n     <div class=\"col-sm-offset-2 col-md-offset-3\">\n       <h1>\n         <div *ngIf=\"useAge == true\">Beräknad vikt: {{wetflag}}</div>\n         <div *ngIf=\"useAge == false\">Angiven vikt: {{wetflag}}</div>\n       </h1>\n     </div>\n     <div class=\"col-sm-offset-2 col-md-offset-3\">\n       <button id=\"acceptButton\" class=\"col-xs-12 col-sm-5 col-md-4 btn-success\" [routerLink]=\"['/hlr']\">Använd</button>\n       <button id=\"changeButton\" class=\"col-xs-12 col-sm-5 col-md-4 btn-danger\" (click)=\"switchKeypad(useAge)\" >Byt till {{newCalcUnit}} </button>\n     </div>\n   </div>\n </div>\n"

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 col-md-3\" id=\"headerElement\">\n      <img *ngIf=\"!(hideInPaths.indexOf(router.url) != -1)\" [src]=\"leftArrow\" class=\"img-responsive\" (click)=\"goBack()\">\n    </div>\n    <div class=\"col-xs-4 col-md-6\">\n      <h1 class=\"text-center\">\n        {{title}}\n      </h1>\n    </div>\n    <div class=\"col-xs-4 col-md-3\">\n      <h3 class=\"text-right\">\n        {{currentTime}}\n      </h3>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngFor=\"let row of checkboxRows\" class=\"row\">\n    <div class=\"checkbox\">\n      <div *ngFor=\"let checkbox of row\" class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n        <label class=\"btn btn-lg checkb\" [class.green-box]=\"checkbox.value\">\n          <input (click)=\"addToLog(checkbox.name, checkbox.value)\" type=\"checkbox\" [(ngModel)]=\"checkbox.value\" value=\"checkbox.name\">\n          {{checkbox.name}}\n        </label>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"space\"></div>\n"

/***/ }),

/***/ 569:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-11 col-sm-11 col-md-11 col-lg-11\">\n      <checklist></checklist>\n    </div>\n    <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1\">\n      <button class=\"btn btn-default\" (click)=\"goToLog()\" [routerLink]=\"['/log']\">Avsluta</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <hlrflow></hlrflow>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <hlr-timer></hlr-timer>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"container-fluid\">\n    <div class=\"hlrflow\">\n        <hlrstep *ngFor=\"let step of steps\" (changeStepNotifierEmitter)=\"changeStep($event)\"  [step]=\"step\"></hlrstep>\n    </div>\n    <div class=\"text-danger\" [hidden]=\"hideJoule()\">\n      <label>{{jouleText}}</label>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default text-center step\" [ngClass]=\"(step.index == step.currentStepIndex) ? 'hlr-border' : 'disabled-step'\">\n\n   <!-- START OF BOLT BUTTON -->\n\n   <div [ngClass]=\"step.showBoltPicture ? '' : 'hideButton'\" class=\"panel-body\" id=\"bolt-image\">\n     <!-- TODO: Add (click) to report medicine buttons to log -->\n     <button class=\"btn btn-lg def-button\"><img class=\"def-image\" [src]=\"boltFullPath\" (click)=\"changeImage()\"/></button>\n   </div>\n   <!-- END OF BOLT BUTTON -->\n\n\n  <!-- START OF HEART MASSAGE TEXT -->\n  <div class=\"panel-body\" id=\"heart-massage\" [innerHTML]=\"step.heartMassage + ' <br> 2 min'\"></div>\n  <!-- END OF HEART MASSAGE TEXT -->\n\n\n  <!-- START OF MEDICINE BUTTONS -->\n  <!-- Theese buttons are not displayed unless the corresponding \"show...Dose\" boolean is set-->\n  <div class=\"panel-body\" id=\"medicine-buttons\">\n\n    <!--TODO: DO EXTENSIVE TESTING HERE TO ASSURE THAT RACE CONDITIONS >DO NOT< EXIST! -->\n    <div [ngClass]=\"step.showAdrenalineDose ? '' : 'hideButton'\">\n      <div class=\"checkbox\">\n        <label class=\"btn checkb\" [class.blue-box]=\"adrenaline.value\" id=\"adrenaline-button\">\n          <input (click)=\"pressedMedicineButton('adrenaline', adrenaline.value)\" type=\"checkbox\" [(ngModel)]=\"adrenaline.value\">\n          {{adrenaline.name}}\n        </label>\n      </div>\n    </div>\n    <div [ngClass]=\"step.showAmiodaroneDose ? '' : 'hideButton'\">\n      <div class=\"checkbox\">\n        <label class=\"btn checkb\" [class.green-box]=\"amiodarone.value\" id=\"amiodarone-button\">\n          <input (click)=\"pressedMedicineButton('amiodarone', amiodarone.value)\" type=\"checkbox\" [(ngModel)]=\"amiodarone.value\">\n          {{amiodarone.name}}\n        </label>\n      </div>\n    </div>\n  </div>\n  <!-- END OF MEDICINE BUTTONS -->\n\n\n  <!-- START OF ANALYSIS BUTTON -->\n  <div class=\"panel-body\" id=\"analysis-buttons\">\n    <label class=\"btn btn-danger\" [(ngModel)]=\"step.radioModel\"\n           btnRadio=\"VF/VT_alternative\">VF/VT</label>\n    <label class=\"btn btn-danger\" [(ngModel)]=\"step.radioModel\"\n           btnRadio=\"Asystoli/PEA_alternative\">Asystoli/PEA</label>\n  </div>\n  <!-- END OF ANALYSIS BUTTON -->\n\n\n\n  <div class=\"panel-body\" id=\"next-prev-button\">\n    <!-- START OF PREV STEP BUTTON -->\n    <label class=\"btn btn-default\" *ngIf=\"step.index == step.currentStepIndex\" (click)=\"changeStepNotifier('prev')\" btnCheckbox>\n      Föregående\n    </label>\n    <!-- END OF PREV STEP BUTTON -->\n    <!-- START OF NEXT STEP BUTTON -->\n    <label class=\"btn btn-default\" *ngIf=\"step.index == step.currentStepIndex\" (click)=\"changeStepNotifier('next')\" btnCheckbox>\n      Nästa\n    </label>\n    <!-- END OF NEXT STEP BUTTON -->\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ 572:
/***/ (function(module, exports) {

module.exports = "  <h2 class=\"text-center\">\n    {{currentTime}}\n  </h2>\n"

/***/ }),

/***/ 573:
/***/ (function(module, exports) {

module.exports = "<div class=\"keypad-frame\">\n  <div class=\"row\">\n    <input class=\"input-lg form-control col-xs-12 col-sm-12 col-md-12\" type=\"text\" placeholder=\"{{keypad_placeholder}}\" value=\"{{keypad_res}}\" readonly>\n  </div>\n\n  <div class=\"row\">\n    <button class=\"keypad-button btn-large col-xs-4 col-sm-4 col-md-4 btn-default\" *ngFor=\"let i of [1,2,3]\" (click)=\"handleInput(i)\">{{i}}</button>\n  </div>\n\n  <div class=\"row\">\n    <button class=\"keypad-button btn-large col-xs-4 col-sm-4 col-md-4 btn-default\" *ngFor=\"let j of [4,5,6]\"  (click)=\"handleInput(j)\">{{j}}</button>\n  </div>\n\n  <div class=\"row\">\n    <button class=\"keypad-button btn-large col-xs-4 col-sm-4 col-md-4 btn-default\" *ngFor=\"let k of [7,8,9]\" (click)=\"handleInput(k)\">{{k}}</button>\n  </div>\n\n  <div class=\"row\">\n    <button class=\"keypad-button btn-large col-xs-4 col-sm-4 col-md-4 btn-default\" *ngFor=\"let l of ['C',0,'<-']\" (click)=\"handleInput(l)\">{{l}}</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 574:
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>Tid</th>\n        <th>DEF.</th>\n        <th></th>\n        <th>Information</th>\n      </tr>\n    </thead>\n    <tbody>\n      <!-- Generates a list of history rows -->\n      <tr *ngFor=\"let hlritem of hlrItems\" [ngClass]=\"getRulerCSS(hlritem.ruler)\">\n        <th scope=\"row\">{{hlritem.timestamp}}</th>\n        <td>\n          <img *ngIf=\"hlritem.defibrilate == defib.TRUE\" class=\"icon-format\" src=\"../../assets/images/bolt-filled-small.png\"/>\n          <img *ngIf=\"hlritem.defibrilate == defib.FALSE\" class=\"icon-format\" src=\"../../assets/images/bolt-outline-small.png\"/>\n        </td>\n        <th scope=\"row\">{{hlritem.compressions}}</th>\n        <td>{{hlritem.information}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ 575:
/***/ (function(module, exports) {

module.exports = "\n<button class=\"btn btn-lg btn-default\" [routerLink]=\"['/log']\">Historik</button>\n\n\n<div class=\"container-fluid\">\n\n  <div class=\"row\">\n    <div class=\"col-sm-3 col-md-3\"></div>\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\n    <button class=\"btn btn-danger  btn-mainmenu center-block\" [routerLink]=\"['/hlr']\">HLR</button>\n    </div>\n    <div class=\"col-sm-3 col-md-3\"></div>\n\n  </div>\n\n\n  <div class=\"row\">\n    <!-- TODO: Add bootstrap classes for different screen sizes -->\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\n      <button class=\"btn btn-danger btn-mainmenu center-block\" [routerLink]=\"['/barnhlr']\">\n        Barn-HLR\n      </button>\n    </div>\n    <div class=\"col-xs-12 col-sm-6 col-md-6\">\n      <button class=\"btn btn-danger btn-mainmenu center-block\" [routerLink]=\"['/respiratoryarrest']\">\n        Andningsstopp\n      </button>\n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ 576:
/***/ (function(module, exports) {

module.exports = "<div>\n  <img class=\"def-image img-center\" [src]=\"respiratory_arrest_instruction_image\" />\n</div>\n\n<!-- height=\"500\" width=\"500\" -->\n"

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(359);


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Ruler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Defibrilate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HLRItem; });
/**
 * Created by daniel on 3/24/17.
 *
 * Contains necessary classes, enums and interfaces for the HLRItem, which is an item that is used to keep information for the log.
 */
/**
 * Defines the different type of rulers that can be present in the log.
 * NONE - No ruler is present
 * HLRSTEP - Hlr-step ruler is present
 * NONE - Finished hlr-flow ruler is present
 */
var Ruler;
(function (Ruler) {
    Ruler[Ruler["NONE"] = 0] = "NONE";
    Ruler[Ruler["HLRSTEP"] = 1] = "HLRSTEP";
    Ruler[Ruler["HLRFLOW"] = 2] = "HLRFLOW";
})(Ruler || (Ruler = {}));
/**
 * The different states that a defibrilation can be in for each HLRItem.
 * FALSE - Defibrilation is not done.
 * TRUE - Defibrilation has been done.
 * NONE - There is no defibrilation possibility.
 */
var Defibrilate;
(function (Defibrilate) {
    Defibrilate[Defibrilate["FALSE"] = 0] = "FALSE";
    Defibrilate[Defibrilate["TRUE"] = 1] = "TRUE";
    Defibrilate[Defibrilate["NONE"] = -1] = "NONE";
})(Defibrilate || (Defibrilate = {}));
/**
 * Each instance of an HLRItem corresponds to a log event. Each object can be displayed as a row in the log.
 */
var HLRItem = (function () {
    function HLRItem(timestamp, defibrilate, compressions, information, ruler) {
        this.timestamp = timestamp;
        this.defibrilate = defibrilate;
        this.compressions = compressions;
        this.information = information;
        this.ruler = ruler;
    }
    return HLRItem;
}());
//# sourceMappingURL=HLRItem.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_HLRItem__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggingService; });
/**
 * Created by daniel on 3/24/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Service used for adding and keeping track of HLRItem objects that are to be displayed in the log.
 * Each HLRItem represents a single row in the log.
 */
var LoggingService = (function () {
    function LoggingService() {
        this.hlrItems = [];
    }
    /**
     * Creates and adds a new HLRItem object to the array which this service keeps internally.
     * @param timestamp : string The exact time in minutes:seconds in which the HLRItem where triggered, from when a HLR-flow was initiated.
     * @param defibrilation : Defibrilate The state in which the defibrilation-icon will appear in the log.
     * @param compressions : string The compression ratio to be displayed in the log.
     * @param information : string Additional information to be displayed for this item in the log.
     * @param ruler : Ruler The ruler type to display in the log for this HLR-item.
     */
    LoggingService.prototype.addHLRItem = function (timestamp, defibrilation, compressions, information, ruler) {
        this.hlrItems.push(new __WEBPACK_IMPORTED_MODULE_1__classes_HLRItem__["a" /* HLRItem */](timestamp, defibrilation, compressions, information, ruler));
    };
    /**
     * Help function that removes the last added entry to the the internal array.
     * @returns {undefined|HLRItem} The last added HLRItem in the internal array.
     */
    LoggingService.prototype.removeLastHLRItem = function () {
        return this.hlrItems.pop();
    };
    /**
     * Empties the internal list for the logging service.
     */
    LoggingService.prototype.removeHLRItems = function () {
        while (this.hlrItems.length > 0) {
            this.removeLastHLRItem();
        }
    };
    /**
     *
     * @returns {HLRItem[]} The list which is currently in the logging service.
     */
    LoggingService.prototype.getHLRItems = function () {
        return this.hlrItems;
    };
    LoggingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], LoggingService);
    return LoggingService;
}());
//# sourceMappingURL=logging.service.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Created by daniel on 4/4/17.
 */
/**
 * Service used to share the time that has passed since a HLR-flow was initiated to other components.
 */
var TimerService = (function () {
    function TimerService() {
    }
    TimerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], TimerService);
    return TimerService;
}());
//# sourceMappingURL=timer.service.js.map

/***/ })

},[597]);
//# sourceMappingURL=main.bundle.js.map