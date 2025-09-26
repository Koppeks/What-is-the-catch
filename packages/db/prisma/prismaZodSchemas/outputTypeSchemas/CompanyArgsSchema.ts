import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanySelectSchema } from '../inputTypeSchemas/CompanySelectSchema';
import { CompanyIncludeSchema } from '../inputTypeSchemas/CompanyIncludeSchema';

export const CompanyArgsSchema: z.ZodType<Prisma.CompanyDefaultArgs> = z.object({
  select: z.lazy(() => CompanySelectSchema).optional(),
  include: z.lazy(() => CompanyIncludeSchema).optional(),
}).strict();

export default CompanyArgsSchema;
