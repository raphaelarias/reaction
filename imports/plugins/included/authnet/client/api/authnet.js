/* eslint camelcase: 0 */
import { Meteor } from "meteor/meteor";

export const AuthNet = {
  // accountOptions() {
  //   let settings = Packages.findOne({
  //     name: "reaction-auth-net",
  //     shopId: Reaction.getShopId(),
  //     enabled: true
  //   }).settings;
  //   let ref = Meteor.settings.authnet;
  //   let options;
  //
  //   options = {
  //     login: getSettings(settings, ref, "api_id"),
  //     tran_key: getSettings(settings, ref, "transaction_key")
  //   };
  //
  //   if (!options.login) {
  //     throw new Meteor.Error("invalid-credentials", "Invalid Authnet Credentials");
  //   }
  //
  //   return options;
  // },

  authorize(cardInfo, paymentInfo, callback) {
    Meteor.call("authnetSubmit", "authorizeTransaction",
      cardInfo,
      paymentInfo,
      callback
    );
  }

  // capture(paymentMethod, callback) {
  //   Meteor.call("authnet/payment/capture",
  //     paymentMethod,
  //     callback
  //   );
  // },

  // refund(cardInfo, paymentMethod, callback) {
  //   Meteor.call("authnet/refund/create",
  //     cardInfo,
  //     paymentMethod,
  //     callback
  //   );
  // },

  // TODO
  // refunds(paymentMethod, callback) {
  //   Meteor.call("authnet/refund/list",
  //     paymentMethod,
  //     callback
  //   );
  // }
};
