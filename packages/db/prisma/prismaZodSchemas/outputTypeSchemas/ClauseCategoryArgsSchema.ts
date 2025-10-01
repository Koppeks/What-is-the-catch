import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseCategorySelectSchema } from '../inputTypeSchemas/ClauseCategorySelectSchema';
import { ClauseCategoryIncludeSchema } from '../inputTypeSchemas/ClauseCategoryIncludeSchema';

export const ClauseCategoryArgsSchema: z.ZodType<Prisma.ClauseCategoryDefaultArgs> = z.object({
  select: z.lazy(() => ClauseCategorySelectSchema).optional(),
  include: z.lazy(() => ClauseCategoryIncludeSchema).optional(),
}).strict();

export default ClauseCategoryArgsSchema;
