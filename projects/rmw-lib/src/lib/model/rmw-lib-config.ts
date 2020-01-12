import { InjectionToken } from '@angular/core';

export class RmwLibConfig {
    key: string;
    
    constructor(key: string) {
        this.key = key;
    }
}

export const LIB_CONFIG  = new InjectionToken<RmwLibConfig>('LIB_CONFIG');
