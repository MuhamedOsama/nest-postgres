import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, VersionColumn, UpdateDateColumn } from 'typeorm';

@Entity({name:"products"})
export class Product extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  id!: string & { __brand: "productId" };

  @Column({nullable: false})
  title: string;

  @Column()
  description: string;

  @Column({ default: 0, nullable: true })
  price: number;

  //MANDATORY ENTITY ATTRIBUTES
  @CreateDateColumn({nullable:false})
  created_at: Date;
  @UpdateDateColumn({nullable:false})
  updated_at: Date;
  @VersionColumn()
  @Column()
  private version!: number;

}
