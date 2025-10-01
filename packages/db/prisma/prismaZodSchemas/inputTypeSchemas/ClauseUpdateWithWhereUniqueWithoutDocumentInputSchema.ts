import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';
import { ClauseUpdateWithoutDocumentInputSchema } from './ClauseUpdateWithoutDocumentInputSchema';
import { ClauseUncheckedUpdateWithoutDocumentInputSchema } from './ClauseUncheckedUpdateWithoutDocumentInputSchema';

export const ClauseUpdateWithWhereUniqueWithoutDocumentInputSchema: z.ZodType<Prisma.ClauseUpdateWithWhereUniqueWithoutDocumentInput> = z.object({
  where: z.lazy(() => ClauseWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ClauseUpdateWithoutDocumentInputSchema),z.lazy(() => ClauseUncheckedUpdateWithoutDocumentInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseUpdateWithWhereUniqueWithoutDocumentInput>;

export default ClauseUpdateWithWhereUniqueWithoutDocumentInputSchema;
