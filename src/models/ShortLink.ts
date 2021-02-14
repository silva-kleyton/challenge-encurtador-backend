import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("short_link")
export class ShortLink {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  originUrl: string;

  @Column()
  shortUrl: string;

  @Column()
  codeLink: string;

  @Column()
  expiresIn: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
