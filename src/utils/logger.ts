let enabled = true;

export function enable() {
  enabled = true;
}

export function disable() {
  enabled = false;
}

export function log(message: string) {
  if (!enabled) return;
  console.log(message);
}

export function warn(message: string) {
  if (!enabled) return;
  console.warn(message);
}
