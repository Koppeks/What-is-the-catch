import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainWhereInputSchema } from './DomainWhereInputSchema';

export const DomainScalarRelationFilterSchema: z.ZodType<Prisma.DomainScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => DomainWhereInputSchema).optional(),
  isNot: z.lazy(() => DomainWhereInputSchema).optional(),
});

export default DomainScalarRelationFilterSchema;
