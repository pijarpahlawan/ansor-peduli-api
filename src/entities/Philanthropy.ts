import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  // JoinColumn,
  // ManyToOne,
  // OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
// import { PhilanthropyCategory } from './PhilanthropyCategory';
// import { UserAccount } from './UserAccount';
// import { PhilanthropyTransaction } from './PhilanthropyTransaction';

@Entity('philanthropies')
export class Philanthropy {
  @PrimaryGeneratedColumn('increment')
  @PrimaryColumn({ type: 'int', name: 'philanthropy_id' })
  philanthropyId: number;

  @Column({ type: 'int', nullable: false, name: 'initiator' })
  initiator: number;

  @Column({ type: 'int', nullable: false, name: 'category_id' })
  categoryId: number;

  @Column({ type: 'varchar', length: 255, nullable: false, name: 'name' })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'banner_path' })
  bannerPath: string;

  @Column({ type: 'text', nullable: false, name: 'description' })
  description: string;

  @Column({ type: 'int', nullable: false, name: 'target' })
  target: number;

  @Column({ type: 'int', nullable: false, name: 'current' })
  current: number;

  @Column({ type: 'varchar', length: 8, nullable: false, name: 'status' })
  status: string;

  @Column({ type: 'date', nullable: false, name: 'deadline' })
  deadline: Date;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  // @ManyToOne(() => PhilanthropyCategory, (category) => category.philanthropies)
  // @JoinColumn({ name: 'category_id' })
  // category: PhilanthropyCategory;

  // @ManyToOne(() => UserAccount, (userAccount) => userAccount.philanthropies)
  // @JoinColumn({ name: 'initiator' })
  // initiatorUser: UserAccount;

  // @OneToMany(
  //   () => PhilanthropyTransaction,
  //   (transaction) => transaction.philanthropy,
  // )
  // transactions: PhilanthropyTransaction[];
}
