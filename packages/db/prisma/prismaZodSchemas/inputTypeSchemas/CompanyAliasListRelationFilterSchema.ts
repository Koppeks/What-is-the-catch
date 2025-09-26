import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyAliasWhereInputSchema } from './CompanyAliasWhereInputSchema';

export const CompanyAliasListRelationFilterSchema: z.ZodType<Prisma.CompanyAliasListRelationFilter> = z.object({
  every: z.lazy(() => CompanyAliasWhereInputSchema).optional(),
  some: z.lazy(() => CompanyAliasWhereInputSchema).optional(),
  none: z.lazy(() => CompanyAliasWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.CompanyAliasListRelationFilter>;

export default CompanyAliasListRelationFilterSchema;
