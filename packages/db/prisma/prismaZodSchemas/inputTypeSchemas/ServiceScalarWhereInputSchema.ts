import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ServiceScalarWhereInputSchema: z.ZodType<Prisma.ServiceScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ServiceScalarWhereInputSchema), z.lazy(() => ServiceScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServiceScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServiceScalarWhereInputSchema), z.lazy(() => ServiceScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  note: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default ServiceScalarWhereInputSchema;
