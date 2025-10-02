import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';
import { ClauseUpdateWithoutDocumentInputSchema } from './ClauseUpdateWithoutDocumentInputSchema';
import { ClauseUncheckedUpdateWithoutDocumentInputSchema } from './ClauseUncheckedUpdateWithoutDocumentInputSchema';

export const ClauseUpdateWithWhereUniqueWithoutDocumentInputSchema: z.ZodType<Prisma.ClauseUpdateWithWhereUniqueWithoutDocumentInput> = z.strictObject({
  where: z.lazy(() => ClauseWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ClauseUpdateWithoutDocumentInputSchema), z.lazy(() => ClauseUncheckedUpdateWithoutDocumentInputSchema) ]),
});

export default ClauseUpdateWithWhereUniqueWithoutDocumentInputSchema;
