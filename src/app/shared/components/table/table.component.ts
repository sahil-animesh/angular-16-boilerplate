import { Component, Input } from '@angular/core';
import { RECORDS_TYPE, TABLE_HEADERS_TYPE } from '../../constant-files/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  /**
   * PROPERTIES DECORATED WITH @Input() DECORATOR GET THEIR VALUES FROM THE PARENT COMPONENT
   */
  @Input() headers!: TABLE_HEADERS_TYPE[];
  @Input() records!: RECORDS_TYPE[];

  constructor(
    /**
     * HERE YOU CAN DO DEPENDENCY INJECTION JUST LIKE Eg. GIVEN BELOW,
     * private alertService: AlertService,
     */
  ) {}

  /**
   * WRITE YOUR CODE FOR COMMON TABLE COMPONENT FROM HERE
   */
}
