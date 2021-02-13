import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("short_link")
class ShortLink {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  originUrl: string;

  @Column()
  shortUrl: Date;

  @Column()
  expiresIn: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ShortLink;
