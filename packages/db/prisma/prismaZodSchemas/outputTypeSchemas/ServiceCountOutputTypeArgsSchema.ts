import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCountOutputTypeSelectSchema } from './ServiceCountOutputTypeSelectSchema';

export const ServiceCountOutputTypeArgsSchema: z.ZodType<Prisma.ServiceCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ServiceCountOutputTypeSelectSchema).nullish(),
}).strict();

export default ServiceCountOutputTypeSelectSchema;
