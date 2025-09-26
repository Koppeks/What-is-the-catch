import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const DomainCountOutputTypeSelectSchema: z.ZodType<Prisma.DomainCountOutputTypeSelect> = z.object({
  ServiceDomain: z.boolean().optional(),
}).strict();

export default DomainCountOutputTypeSelectSchema;
