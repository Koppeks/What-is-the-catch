import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';
import { ClauseCreateWithoutDocumentInputSchema } from './ClauseCreateWithoutDocumentInputSchema';
import { ClauseUncheckedCreateWithoutDocumentInputSchema } from './ClauseUncheckedCreateWithoutDocumentInputSchema';

export const ClauseCreateOrConnectWithoutDocumentInputSchema: z.ZodType<Prisma.ClauseCreateOrConnectWithoutDocumentInput> = z.object({
  where: z.lazy(() => ClauseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClauseCreateWithoutDocumentInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutDocumentInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseCreateOrConnectWithoutDocumentInput>;

export default ClauseCreateOrConnectWithoutDocumentInputSchema;
