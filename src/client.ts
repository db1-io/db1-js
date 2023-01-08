import {
  getValueAndMetadata,
  getValueDescriptionFromProto,
  setValue,
} from "./utils/utils";

export default {
  async getItem(key: string): Promise<any> {
    const result = await getValueAndMetadata(key);
    const value = getValueDescriptionFromProto(result.value);
    return value;
  },

  async setItem(key: string, value: any) {
    await setValue(key, value);
  },
};
