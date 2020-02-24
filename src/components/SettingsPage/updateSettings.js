import * as firebase from 'firebase';
import "firebase/firestore";

// TODO: Write a validation function for text/empty input.
async function updateSettings (category, settings, user) {
  if (!user.manager && category.needsManager) {
    throw new Error("ERROR: Insufficient Permissions To Complete This Action");
  }

  let id = (category.document == "business") ? user.business : user.id;

  try {
    let res = await firebase.firestore().collection(category.collection).doc(id)
      .update(settings);
    return {};
  } catch (err) {
    return {error: err};
  }
}

export default updateSettings;
