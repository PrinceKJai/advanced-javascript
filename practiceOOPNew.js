// Getters and Setters exercise
// Create a class UserProfile that encapsulates a user's profile information.

// This class should have fields for username, email, and birthdate. Use getters and setters when creating these fields. Use setters to validate that the username is a non-empty string, the email includes an '@' symbol, and the birthdate is a valid date string.

// If the username is an empty string or not a string - throw an error with the message of 'Invalid username.'

// If the email does not include a @ character - throw an error with the message of 'Invalid email.'

// If the birthdate is not a valid date string (for example '1990-01-01') - throw an error with the message of 'Invalid birthdate.'

// Make sure to also use the setters that you write (with the implemented validations) in the constructor function of the class, so it also validates the fields when the object is initially created from the class (i.e., when the constructor function is initially executed).

class UserProfile {
  constructor(username, email, birthdate) {
    this.username = username;
    this.email = email;
    this.birthdate = birthdate;
  }

  get userName() {
    return this.userName;
  }

  get email() {
    return this.email;
  }

  get birthdate() {
    return this.birthdate;
  }

  set userName(name) {
    if (name.length === 0 || typeof name !== "string") {
      throw new Error("Invalid username.");
    }
    this.userName = name;
  }

  set email(mail) {
    if (mail.length === 0 || !mail.includes("@")) {
      throw new Error("Invalid email.");
    }
    this.email = mail;
  }

  set birthdate(dateString) {
    const newDate = new Date(dateString);
    if (isNaN(newDate.getTime())) {
      throw new Error("Invalid birthdate.");
    }
    this.birthdate = newDate;
  }
}

const user = new UserProfile();
console.log(user);
