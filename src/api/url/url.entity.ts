import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Url {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  longUrl: string;

  @Column({
    unique: true,
  })
  code: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
