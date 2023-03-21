import { Component, OnInit, Input } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'fdfooter',
  templateUrl: './fdfooter.component.html',
  styleUrls: ['./fdfooter.component.scss']
})
export class FdfooterComponent implements OnInit {
  @Input() content: any;
  faEnvelope = faEnvelope;
  faDove = faTwitter;
  faGithub = faGithub;
  faInsta = faInstagram;
  socialLinks: Array<any> = [
    {
    "icon" : this.faDove,
    "link" : "#"
  },
  {
    "icon" : this.faGithub,
    "link" : "#"
  },
  {
    "icon" : this.faInsta,
    "link" : "#"
  },
  {
    "icon" : this.faEnvelope,
    "link" : "#"
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
