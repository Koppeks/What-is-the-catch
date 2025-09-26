import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainWhereInputSchema } from './DomainWhereInputSchema';

export const DomainListRelationFilterSchema: z.ZodType<Prisma.DomainListRelationFilter> = z.object({
  every: z.lazy(() => DomainWhereInputSchema).optional(),
  some: z.lazy(() => DomainWhereInputSchema).optional(),
  none: z.lazy(() => DomainWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.DomainListRelationFilter>;

export default DomainListRelationFilterSchema;
