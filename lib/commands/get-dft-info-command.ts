import { ElectrumApiInterface } from "../api/electrum-api.interface";
import { AtomicalsGetFetchType, CommandInterface } from "./command.interface";
import { decorateAtomical } from "../utils/atomical-format-helpers";

export class GetDftInfoCommand implements CommandInterface {
  constructor(private electrumApi: ElectrumApiInterface,
    private atomicalAliasOrId: string
  ) {
  }

  async run(): Promise<any> {
    let response;
    response = await this.electrumApi.atomicalsGetDftInfo(this.atomicalAliasOrId);
    const updatedRes = Object.assign({},
      response,
      {
        result: decorateAtomical(response.result)
      }
    );
    return {
      success: true,
      data: updatedRes
    }
  }
}