import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const DomainScalarWhereInputSchema: z.ZodType<Prisma.DomainScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => DomainScalarWhereInputSchema), z.lazy(() => DomainScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DomainScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DomainScalarWhereInputSchema), z.lazy(() => DomainScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  host: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  note: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default DomainScalarWhereInputSchema;
