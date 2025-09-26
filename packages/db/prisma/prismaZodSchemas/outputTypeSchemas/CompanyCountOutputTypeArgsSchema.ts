import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyCountOutputTypeSelectSchema } from './CompanyCountOutputTypeSelectSchema';

export const CompanyCountOutputTypeArgsSchema: z.ZodType<Prisma.CompanyCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CompanyCountOutputTypeSelectSchema).nullish(),
}).strict();

export default CompanyCountOutputTypeSelectSchema;
