import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CompanyCountOutputTypeSelectSchema: z.ZodType<Prisma.CompanyCountOutputTypeSelect> = z.object({
  Service: z.boolean().optional(),
  CompanyAlias: z.boolean().optional(),
  Domain: z.boolean().optional(),
}).strict();

export default CompanyCountOutputTypeSelectSchema;
