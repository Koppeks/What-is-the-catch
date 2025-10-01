import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCreateWithoutDocumentInputSchema } from './ClauseCreateWithoutDocumentInputSchema';
import { ClauseUncheckedCreateWithoutDocumentInputSchema } from './ClauseUncheckedCreateWithoutDocumentInputSchema';
import { ClauseCreateOrConnectWithoutDocumentInputSchema } from './ClauseCreateOrConnectWithoutDocumentInputSchema';
import { ClauseCreateManyDocumentInputEnvelopeSchema } from './ClauseCreateManyDocumentInputEnvelopeSchema';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';

export const ClauseCreateNestedManyWithoutDocumentInputSchema: z.ZodType<Prisma.ClauseCreateNestedManyWithoutDocumentInput> = z.object({
  create: z.union([ z.lazy(() => ClauseCreateWithoutDocumentInputSchema),z.lazy(() => ClauseCreateWithoutDocumentInputSchema).array(),z.lazy(() => ClauseUncheckedCreateWithoutDocumentInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutDocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClauseCreateOrConnectWithoutDocumentInputSchema),z.lazy(() => ClauseCreateOrConnectWithoutDocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClauseCreateManyDocumentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ClauseWhereUniqueInputSchema),z.lazy(() => ClauseWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseCreateNestedManyWithoutDocumentInput>;

export default ClauseCreateNestedManyWithoutDocumentInputSchema;
