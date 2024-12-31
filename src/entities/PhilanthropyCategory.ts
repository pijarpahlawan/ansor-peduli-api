import {
  Column,
  CreateDateColumn,
  Entity,
  // OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
// import { Philanthropy } from './Philanthropy';

@Entity('philanthropy_categories')
export class PhilanthropyCategory {
  @PrimaryGeneratedColumn('increment')
  @Column({ type: 'int', name: 'category_id' })
  categoryId: number;

  @Column({
    type: 'varchar',
    length: 32,
    unique: true,
    nullable: false,
    name: 'name',
  })
  name: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  // @OneToMany(() => Philanthropy, (philanthropy) => philanthropy.category)
  // philanthropies: Philanthropy[];
}
