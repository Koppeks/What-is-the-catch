import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { ServiceScalarRelationFilterSchema } from './ServiceScalarRelationFilterSchema';
import { ServiceWhereInputSchema } from './ServiceWhereInputSchema';
import { DomainScalarRelationFilterSchema } from './DomainScalarRelationFilterSchema';
import { DomainWhereInputSchema } from './DomainWhereInputSchema';

export const ServiceDomainWhereInputSchema: z.ZodType<Prisma.ServiceDomainWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ServiceDomainWhereInputSchema), z.lazy(() => ServiceDomainWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServiceDomainWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServiceDomainWhereInputSchema), z.lazy(() => ServiceDomainWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  serviceId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  domainId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  pathPattern: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  service: z.union([ z.lazy(() => ServiceScalarRelationFilterSchema), z.lazy(() => ServiceWhereInputSchema) ]).optional(),
  domain: z.union([ z.lazy(() => DomainScalarRelationFilterSchema), z.lazy(() => DomainWhereInputSchema) ]).optional(),
});

export default ServiceDomainWhereInputSchema;
