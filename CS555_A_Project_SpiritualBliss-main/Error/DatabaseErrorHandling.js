const { ObjectId } = require("mongodb");
module.exports = {
  //tested
  checkString(parameter, name) {
    if (parameter === undefined) {
      throw `Please pass ${name} parameter to the function`;
    }
    if (typeof parameter != "string")
      throw `parameter ${name} must be of type string.`;
    if (parameter.trim().length === 0)
      throw `parameter cannot be an empty string.`;
  },

  //tested
  checkEmail(parameter) {
    this.checkString(parameter, "email");

    const emailRe =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRe.test(String(parameter).toLowerCase())) {
      throw `Email is not in proper format.`;
    }
  },

  //tested
  checkStringObjectId(parameter, name) {
    this.checkString(parameter, name);
    // ref: https://stackoverflow.com/a/11989159
    if (!ObjectId.isValid(parameter))
      throw `Passed parameter ${name} is not a valid object ID.`;
  },

  //tested
  checkPassword(parameter) {
    if (parameter === undefined || parameter === null) {
      throw "Please pass a valid password";
    }

    if (typeof parameter === "string") {
      if (parameter.trim().length == 0) {
        throw "Password cannot be empty";
      }
    } else {
      throw `Password must be of type string`;
    }
  },

  // tested
  checkInt(parameter, name) {
    if (parameter === undefined) {
      throw `Please pass ${name} parameter to the function`;
    }
    if (typeof parameter != "number")
      throw `parameter ${name} must be of type Number.`;

    if (parameter.toString().split(".").length > 1)
      throw `Error! ${name} cannot be a float.`;
  },

  //tested
  checkObject(object, name) {
    if (typeof object === "undefined") {
      throw `Error! Please provide ${name} into the function`;
    }
    if (typeof object !== "object" || Array.isArray(object) || object === null)
      throw `Error! Parameter ${name} should be of object type.`;

    if (Object.keys(object).length == 0) {
      throw `${name} object should have atleast one key-value pair`;
    }
  },

  

  //tested
  checkStringOrInt(parameter, name) {
    if (parameter === undefined) {
      throw `Please pass ${name} parameter to the function`;
    }
    if (typeof parameter !== "string") {
      if (typeof parameter !== "number") {
        throw `parameter ${name} must be of type string or number.`;
      }
    } else {
      if (parameter.trim().length === 0)
        throw `parameter ${name} cannot be an empty string.`;
    }
  },

 

  //Tested
  checkBoolean(boolValue, name) {
    if (typeof boolValue === undefined) {
      throw `Please pass ${name} parameter to the function`;
    }

    if (typeof boolValue !== "boolean") {
      throw `${name} parameter must be of type boolean`;
    }
  },

 

  //tested
  checkPhoneNumber(phoneNumber) {
    this.checkString(phoneNumber, "Phone Number");
    if (phoneNumber.trim().length !== 10) {
      throw `Phone number must have 10 digits.`;
    }

    for (i of phoneNumber) {
      try {
        if (isNaN(parseInt(i))) {
          throw " ";
        }
        this.checkInt(parseInt(i));
      } catch {
        throw "Phone number string should only contain numbers.";
      }
    }
  },

  //tested
  //Zipcode can be any number
  checkAddress(address) {
    this.checkObject(address, "address");

    const keys_ = ["Line1", "Line2", "City", "State", "Country"];

    for (key of keys_) {
      if (address[key] === undefined) {
        throw `You should mention the ${key} of the address`;
      }
      this.checkString(address[key], key);
    }

    if (address["ZipCode"] === undefined) {
      throw "You should mention the ZipCode of the address";
    }

    this.checkInt(address["ZipCode"], "ZipCode");

    if (address["ZipCode"].toString().split(".").length > 1) {
      throw `ZipCode must not be float nor have "." `;
    }

    if (!(Object.keys(address).length === 6)) {
      throw " A property object should have only 6 keys i.e., Line1, Line2, City, State, Country and ZipCode .";
    }
  },
  checkFloat(parameter, name) {
    if (parameter === undefined) {
      throw `Please pass ${name} parameter to the function`;
    }
    if (typeof parameter != "number")
      throw `parameter ${name} must be of type Number.`;
  },
};
