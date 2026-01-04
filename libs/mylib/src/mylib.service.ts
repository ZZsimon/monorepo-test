import { Injectable } from '@nestjs/common';

@Injectable()
export class MylibService {
  libService() {
    return 'libService';
  }
}
