// Function to slow down how fast a promise resolves in Jest

export default function delay<T>(millis: number, value?: T): Promise<T> {
  return new Promise((resolve: any) => setTimeout(resolve(value), millis));
}
