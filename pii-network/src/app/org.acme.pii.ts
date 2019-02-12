import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.pii{
   export class Member extends Participant {
      gitid: string;
      name: string;
      studentnum: string;
      dob: Date;
      gitrepo: string[];
   }
   export class studentscore extends Asset {
      assignmentname: string;
      student: Member;
      score: string;
   }
   export abstract class MemberTransaction extends Transaction {
      memberId: string;
   }
   export abstract class ScoreTransaction extends Transaction {
   }
   export class getrepo extends MemberTransaction {
   }
   export class setscore extends ScoreTransaction {
      studentid: string;
      asset: studentscore;
      value: string;
   }
   export class getscore extends ScoreTransaction {
   }
   export class AuthorizeAccess extends MemberTransaction {
   }
   export class RevokeAccess extends MemberTransaction {
   }
   export class MemberEvent extends Event {
      memberTransaction: MemberTransaction;
   }
   export class ScoreEvent extends Event {
      scoreTransaction: ScoreTransaction;
   }
// }
