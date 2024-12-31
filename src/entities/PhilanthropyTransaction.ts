import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
// import { Philanthropy } from './Philanthropy';
import { UserAccount } from './UserAccount';

@Entity('philanthropy_transactions')
export class PhilanthropyTransaction {
  @PrimaryGeneratedColumn('increment')
  @Column({ type: 'int', name: 'transaction_id' })
  transactionId: number;

  @Column({ type: 'varchar', length: 255, nullable: false, name: 'donor' })
  donor: string;

  @Column({ type: 'int', nullable: false, name: 'input_by' })
  inputBy: number;

  @Column({ type: 'int', nullable: false, name: 'philanthropy_id' })
  philanthropyId: number;

  @Column({ type: 'int', nullable: false, name: 'amount' })
  amount: number;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  // @ManyToOne(() => Philanthropy, (philanthropy) => philanthropy.transactions)
  // @JoinColumn({ name: 'philanthropy_id' })
  // philanthropy: Philanthropy;

  @ManyToOne(() => UserAccount, (userAccount) => userAccount.transactions)
  @JoinColumn({ name: 'input_by' })
  inputByUser: UserAccount;
}
