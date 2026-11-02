// Akkuea Shared: Validation Service Sanitization (Issue #1294)
export class ValidationServiceGuard {
  public static isValidAmount(val: unknown): boolean {
    if (typeof val !== 'number' && typeof val !== 'string') return false;
    const num = Number(val);
    return !isNaN(num) && isFinite(num) && num > 0;
  }

  public static isValidContractAddress(address: string): boolean {
    // Stellar contract addresses start with C and are 56 chars
    return /^C[A-Z0-9]{55}$/.test(address);
  }
}
