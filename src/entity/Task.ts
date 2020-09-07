import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity( {name : 'task' })
export class Task {

    // uuid, increment, rowid
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column( {nullable : false} )
    title: string;

    @Column( {nullable : false} )
    description: string;

    @Column( {nullable : false} )
    finished: boolean = false;
}