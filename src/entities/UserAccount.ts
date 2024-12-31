import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
// import { Philanthropy } from './Philanthropy';
import { PhilanthropyTransaction } from './PhilanthropyTransaction';

@Entity('user_accounts')
export class UserAccount {
  @PrimaryGeneratedColumn('increment')
  @Column({ type: 'int', name: 'user_id' })
  userId: number;

  @Column({
    type: 'varchar',
    length: 32,
    unique: true,
    nullable: false,
    name: 'username',
  })
  username: string;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: false, name: 'password' })
  password: string;

  @Column({ type: 'varchar', length: 255, nullable: false, name: 'full_name' })
  fullName: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  // @OneToMany(() => Philanthropy, (philanthropy) => philanthropy.initiatorUser)
  // philanthropies: Philanthropy[];

  @OneToMany(
    () => PhilanthropyTransaction,
    (transaction) => transaction.inputByUser,
  )
  transactions: PhilanthropyTransaction[];
}
