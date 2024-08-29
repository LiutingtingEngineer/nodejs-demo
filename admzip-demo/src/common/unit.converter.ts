type Unit = 'B' | 'KB' | 'MB' | 'GB' | 'TB';

type Duration = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
};

export const DAY_MILLIS = 86400000;//24 * 60 * 60 * 1000

export class Units {
  static bytesToUnit(bytes: number, unit: Unit): number {
    switch (unit) {
      case 'KB':
        return bytes / 1024;
      case 'MB':
        return bytes / (1024 * 1024);
      case 'GB':
        return bytes / (1024 * 1024 * 1024);
      case 'TB':
        return bytes / (1024 * 1024 * 1024 * 1024);
      default:
        return bytes;
    }
  }

  static unitToBytes(value: number, unit: Unit): number {
    switch (unit) {
      case 'KB':
        return value * 1024;
      case 'MB':
        return value * (1024 * 1024);
      case 'GB':
        return value * (1024 * 1024 * 1024);
      case 'TB':
        return value * (1024 * 1024 * 1024 * 1024);
      default:
        return value;
    }
  }

  // Function to convert days, hours, minutes, and seconds to milliseconds
  static unitToMilliseconds(duration: Duration): number {
    const { days = 0, hours = 0, minutes = 0, seconds = 0 } = duration;
    return (
      days * 24 * 60 * 60 * 1000 +
      hours * 60 * 60 * 1000 +
      minutes * 60 * 1000 +
      seconds * 1000
    );
  }

  static millisecondsToUnit(milliseconds: number): Duration {
    const days = Math.floor(milliseconds / (24 * 60 * 60 * 1000));
    const remainingMilliseconds1 = milliseconds % (24 * 60 * 60 * 1000);
    const hours = Math.floor(remainingMilliseconds1 / (60 * 60 * 1000));
    const remainingMilliseconds2 = remainingMilliseconds1 % (60 * 60 * 1000);
    const minutes = Math.floor(remainingMilliseconds2 / (60 * 1000));
    const remainingMilliseconds3 = remainingMilliseconds2 % (60 * 1000);
    const seconds = Math.floor(remainingMilliseconds3 / 1000);
    const remainingMilliseconds = remainingMilliseconds3 % 1000;
    return {
      days,
      hours,
      minutes,
      seconds,
      milliseconds: remainingMilliseconds,
    };
  }
}
