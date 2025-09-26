import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ServiceCountOutputTypeSelectSchema: z.ZodType<Prisma.ServiceCountOutputTypeSelect> = z.object({
  ServiceDomain: z.boolean().optional(),
}).strict();

export default ServiceCountOutputTypeSelectSchema;
